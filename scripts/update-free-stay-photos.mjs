import { readFile, writeFile } from 'node:fs/promises';
const page = new URL('../2026/index.html', import.meta.url);
let html = await readFile(page, 'utf8');
const replacements = [
  ['<img class="hero-bg" src="/2026/noto/accommodation1.webp" alt="能登の古民家の和室"/>', '<img class="hero-bg" src="/2026/noto/free-stay-workspace-20261014.jpg" alt="古民家の共有ワークスペース"/>'],
  ['<img src="/2026/noto/accommodation1.webp" alt="能登の古民家滞在イメージ"/>', '<img src="/2026/noto/free-stay-bedroom-20261014.jpg" alt="ベッドと作業机を備えた個室"/>'],
  ['<img src="/2026/noto/coworking1.webp" alt="能登のコワーキング環境"/>', '<img src="/2026/noto/free-stay-tatami-20261014.jpg" alt="和室の作業スペース"/>'],
];
for (const [before, after] of replacements) {
  if (!html.includes(before)) throw new Error(`Missing expected image: ${before}`);
  html = html.replace(before, after);
}
html = html.replaceAll('https://noto.nomadresort.jp/2026/noto/accommodation1.webp', 'https://noto.nomadresort.jp/2026/noto/free-stay-workspace-20261014.jpg')
  .replace('<meta property="og:image:width" content="1600"/>', '<meta property="og:image:width" content="1448"/>')
  .replace('<meta property="og:image:height" content="1066"/>', '<meta property="og:image:height" content="1086"/>')
  .replace('A traditional home in Noto for the 2026 Free Accommodation Program', 'A shared workspace in a traditional home in Noto')
  .replace('<link rel="preload" href="/2026/noto/accommodation1.webp" as="image"/>', '<link rel="preload" href="/2026/noto/free-stay-workspace-20261014.jpg" as="image"/>')
  .replace('<link rel="preload" href="/2026/noto/coworking1.webp" as="image"/>', '');
await writeFile(page, html);
