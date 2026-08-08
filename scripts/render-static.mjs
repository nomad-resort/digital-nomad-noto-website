import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputPath = resolve(process.argv[2] ?? "dist/static/index.html");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("render", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://noto.nomadresort.jp/", {
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

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const renderedHtml = await response.text();
const childPageHtml = renderedHtml
  .replaceAll("/assets/", "/2026/assets/")
  .replaceAll("/noto/", "/2026/noto/")
  .replaceAll("https://noto.nomadresort.jp/favicon.png", "https://noto.nomadresort.jp/2026/favicon.png")
  .replaceAll("https://noto.nomadresort.jp/og.png", "https://noto.nomadresort.jp/2026/og.png")
  .replace('"pathname":"/"', '"pathname":"/2026/"');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, childPageHtml, "utf8");
console.log(outputPath);
