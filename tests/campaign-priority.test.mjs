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

test("the campaign contains only Free Accommodation without a FAM archive or deadline", () => {
  const freeIndex = html.indexOf('<section class="free-section"');
  const famArchiveIndex = html.indexOf('id="fam-archive"');
  const festivalIndex = html.indexOf('<section class="festival-section"');

  assert.ok(freeIndex > -1, "Free Accommodation section is present");
  assert.equal(famArchiveIndex, -1);
  assert.equal(festivalIndex, -1);
  assert.doesNotMatch(html, /FAM|fam-archive|August 24|Aug\. 24|8月24日|APPLICATION DEADLINE|September 18–23/);
});

test("all homepage campaign buttons promote only Free Accommodation", async () => {
  for (const file of ['index.html', 'ja/index.html', 'zh/index.html']) {
    const page = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.doesNotMatch(page, /FAM TOUR|FAMツアー/);
    assert.match(page, /href="\/2026\/"/);
  }
});

test("campaign anchors and application links remain valid", () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), match[1]);
  const formLinks = [...html.matchAll(/href="(https:\/\/docs.google.com\/forms\/[^\"]+)"/g)];
  assert.ok(formLinks.length >= 2);
  for (const match of formLinks) assert.equal(match[1], 'https://docs.google.com/forms/d/e/1FAIpQLSf1479JdvEl36i44FovnueiTBJW8zP7gfG6cBChBToW-1MuwA/viewform');
  assert.match(html, /Interviews and selection results will be arranged individually/);
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
