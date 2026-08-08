import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual Noto application landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Nomad Resort Noto 2026 \| Okuma Kabuto FAM Tour<\/title>/i);
  assert.match(html, /class="site-header"/);
  assert.match(html, /class="header-cta"/);
  assert.match(html, /Apply now/);
  assert.match(html, /応募する/);
  assert.match(html, /SEP\. 19–24, 2026/);
  assert.match(html, /Pick up near Kanazawa Station/);
  assert.match(html, /Active tour on the waters of Noto/);
  assert.match(html, /Experience a local Japanese snack bar/);
  assert.match(html, /5 nights at HANAMI/);
  assert.doesNotMatch(html, /SEP\. 16–22/);
  assert.doesNotMatch(html, /Rice harvesting/);
  assert.match(html, /Free Accommodation/);
  assert.match(html, /New to Noto\? Explore the culture and region/);
  assert.match(html, /能登とは？ 能登の文化と地域について知る/);
  assert.match(html, /hero-title-ja-desktop/);
  assert.match(html, /hero-title-ja-mobile/);
  assert.match(html, /From application to selection/);
  assert.match(html, /August 6–24 \/ until 12:00 noon JST/);
  assert.match(html, /all notices by August 28/);
  assert.match(html, /APPLY BY AUG\. 24 \/ 12:00 JST/);
  assert.match(html, /href="https:\/\/noto\.nomadresort\.jp\/"/);
  assert.match(html, /docs\.google\.com\/forms\/d\/1I1u-Rj2LemqzpfA9U4yaZ7aWhX-qxBflv-BbSKhwcDc\/viewform/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("keeps the application CTA fixed and production metadata canonical", async () => {
  const [css, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /\.site-header\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /\.header-cta\s*\{[^}]*background:\s*var\(--gold\)/s);
  assert.doesNotMatch(css, /\.header-cta\s*\{\s*display:\s*none/);
  assert.match(css, /@media \(max-width: 390px\)/);
  assert.match(layout, /metadataBase:\s*new URL\("https:\/\/noto\.nomadresort\.jp"\)/);
});
