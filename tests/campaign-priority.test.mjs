import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../2026/index.html", import.meta.url), "utf8");

function sliceBetween(start, end) {
  const startIndex = html.indexOf(start);
  assert.notEqual(startIndex, -1, `missing start marker: ${start}`);
  const endIndex = html.indexOf(end, startIndex);
  assert.notEqual(endIndex, -1, `missing end marker: ${end}`);
  return html.slice(startIndex, endIndex);
}

test("the page presents Free Accommodation as the active campaign", () => {
  const hero = sliceBetween('<section class="hero"', "</section>");

  assert.match(html, /<title>Nomad Resort Noto 2026 \| Free Accommodation<\/title>/);
  assert.match(hero, /NOMAD RESORT NOTO 2026 \/ FREE ACCOMMODATION/);
  assert.match(hero, /能登に暮らし、/);
  assert.match(hero, /Live in Noto\./);
  assert.match(hero, /2026\.08–12/);
  assert.match(hero, /14–30 NIGHTS/);
  assert.match(hero, /フリーアコモデーションに応募/);
  assert.match(hero, /Apply for Free Accommodation/);
});

test("Free Accommodation details appear before the ended FAM Tour archive", () => {
  const freeIndex = html.indexOf('<section class="free-section"');
  const famArchiveIndex = html.indexOf('id="fam-archive"');
  const festivalIndex = html.indexOf('<section class="festival-section"');

  assert.ok(freeIndex > -1, "Free Accommodation section is present");
  assert.ok(famArchiveIndex > freeIndex, "FAM archive follows Free Accommodation");
  assert.ok(festivalIndex > famArchiveIndex, "FAM Tour content follows its archive notice");
  assert.match(html, /2026年のFAMツアーは終了しました/);
  assert.match(html, /The 2026 FAM Tour has ended/);
});

test("active application guidance only promotes Free Accommodation", () => {
  const header = sliceBetween('<header class="site-header">', "</header>");
  const hero = sliceBetween('<section class="hero"', "</section>");
  const requirementsActions = sliceBetween(
    '<div class="requirements-actions shell">',
    "</section>",
  );

  for (const activeArea of [header, hero, requirementsActions]) {
    assert.doesNotMatch(activeArea, /one or both|1つまたは両方|FAM Tour、フリーアコモ/);
  }

  assert.match(header, /フリーアコモに応募/);
  assert.match(requirementsActions, /フリーアコモデーションに応募/);
  assert.match(requirementsActions, /Apply for Free Accommodation/);
});
