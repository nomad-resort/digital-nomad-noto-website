import { readFile, writeFile } from 'node:fs/promises';

const page = new URL('../2026/index.html', import.meta.url);
let html = await readFile(page, 'utf8');
for (const name of ['fam-ended', 'festival-section', 'notojima-section', 'itinerary-section', 'fam-value-section']) {
  const pattern = new RegExp(`<section class="${name}"[^>]*>[\\s\\S]*?<\\/section>`, 'g');
  html = html.replace(pattern, '');
}
html = html.replace(/<a href="#fam-archive">[\s\S]*?<\/a>/g, '');
html = html.replace(/<link rel="preload" href="\/2026\/noto\/(?:okumakabuto-[^"/]+|notojima-suso.jpg|hanami-[^"/]+)" as="image"\/>/g, '');
html = html.replace('応募フォームでは「フリーアコモデーション」を選択してください。', '応募フォームに希望する滞在日程・泊数・貢献内容をご記入ください。面談と選考結果は個別にご案内します。');
html = html.replace('Choose “Free Accommodation” in the application form.', 'Enter your preferred stay dates, length of stay, and proposed contribution in the application form. Interviews and selection results will be arranged individually.');
await writeFile(page, html);
