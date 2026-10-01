import { readFile, writeFile } from "node:fs/promises";

const pageUrl = new URL("../2026/index.html", import.meta.url);
let html = await readFile(pageUrl, "utf8");

if (html.includes("Nomad Resort Noto 2026 | Free Accommodation")) {
  console.log("Free Accommodation is already the primary campaign.");
  process.exit(0);
}

const applicationForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1479JdvEl36i44FovnueiTBJW8zP7gfG6cBChBToW-1MuwA/viewform";

function extractSection(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Missing section marker: ${marker}`);
  const end = source.indexOf("</section>", start);
  if (end === -1) throw new Error(`Missing section end for: ${marker}`);
  return source.slice(start, end + "</section>".length);
}

function removeOnce(source, fragment) {
  const next = source.replace(fragment, "");
  if (next === source) throw new Error("Expected fragment was not removed");
  return next;
}

const mainEnd = html.indexOf("</main>");
if (mainEnd === -1) throw new Error("Missing </main>");
html = `${html.slice(0, mainEnd + "</main>".length)}</body></html>`;

html = html
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<script>self\.__VINEXT_RSC_(?:PARAMS|NAV)__=.*?<\/script>/g, "")
  .replace(
    '<link rel="stylesheet" href="/2026/assets/index-DaMCiF63.css" data-rsc-css-href="/2026/assets/index-DaMCiF63.css" data-precedence="vite-rsc/importer-resources"/>',
    '<link rel="stylesheet" href="/2026/assets/index-DaMCiF63.css"/><link rel="stylesheet" href="/2026/assets/campaign-priority.css"/>',
  )
  .replace(/<title>.*?<\/title>/, "<title>Nomad Resort Noto 2026 | Free Accommodation</title>")
  .replace(
    /<meta name="description" content="[^"]*"\/>/,
    '<meta name="description" content="Live and work from a traditional home in Noto. Free accommodation for selected participants staying 14–30 nights between August and December 2026."/>',
  )
  .replace(
    /<meta property="og:title" content="[^"]*"\/>/,
    '<meta property="og:title" content="Nomad Resort Noto 2026 | Free Accommodation"/>',
  )
  .replace(
    /<meta property="og:description" content="[^"]*"\/>/,
    '<meta property="og:description" content="Live in Noto, continue your work or creative practice, and build lasting relationships with the community."/>',
  )
  .replace(
    /<meta property="og:image" content="[^"]*"\/>/,
    '<meta property="og:image" content="https://noto.nomadresort.jp/2026/noto/accommodation1.webp"/>',
  )
  .replace('<meta property="og:image:width" content="1731"/>', '<meta property="og:image:width" content="1600"/>')
  .replace('<meta property="og:image:height" content="909"/>', '<meta property="og:image:height" content="1066"/>')
  .replace(
    /<meta property="og:image:alt" content="[^"]*"\/>/,
    '<meta property="og:image:alt" content="A traditional home in Noto for the 2026 Free Accommodation Program"/>',
  )
  .replace(
    /<meta name="twitter:title" content="[^"]*"\/>/,
    '<meta name="twitter:title" content="Nomad Resort Noto 2026 | Free Accommodation"/>',
  )
  .replace(
    /<meta name="twitter:description" content="[^"]*"\/>/,
    '<meta name="twitter:description" content="Live and work in Noto with free accommodation for selected 14–30 night stays."/>',
  )
  .replace(
    /<meta name="twitter:image" content="[^"]*"\/>/,
    '<meta name="twitter:image" content="https://noto.nomadresort.jp/2026/noto/accommodation1.webp"/>',
  );

html = html.replace(
  /<nav aria-label="Main navigation">.*?<\/nav>/,
  '<nav aria-label="Main navigation"><a href="https://noto.nomadresort.jp/"><span class="lang-ja">能登とは？</span><span class="lang-en">About Noto</span></a><a href="#free"><span class="lang-ja">フリーアコモ</span><span class="lang-en">Free stay</span></a><a href="#collaboration"><span class="lang-ja">できること</span><span class="lang-en">Possibilities</span></a><a href="#fam-archive"><span class="lang-ja">FAMツアー記録</span><span class="lang-en">FAM archive</span></a></nav>',
);
html = html
  .replace('<span class="lang-ja">8月24日締切・応募</span>', '<span class="lang-ja">フリーアコモに応募</span>')
  .replace('<span class="lang-en">Apply by Aug. 24</span>', '<span class="lang-en">Apply for free stay</span>');

const oldHero = extractSection(html, '<section class="hero"');
const hero = `<section class="hero" id="top" aria-labelledby="hero-title"><img class="hero-bg" src="/2026/noto/accommodation1.webp" alt="能登の古民家の和室"/><div class="hero-shade"></div><div class="hero-content shell"><p class="eyebrow light">NOMAD RESORT NOTO 2026 / FREE ACCOMMODATION</p><h1 id="hero-title"><span class="lang-ja hero-title-ja hero-title-ja-desktop">能登に暮らし、<br/>次の関係をつくる。</span><span class="lang-ja hero-title-ja hero-title-ja-mobile">能登に暮らし、<br/>次の関係を<br/>つくる。</span><span class="lang-en">Live in Noto.<br/>Build what comes next.</span></h1><p class="hero-lead"><span class="lang-ja">古民家を拠点に14〜30泊。仕事や創作を続けながら、能登との長い関係を育てる滞在プログラムです。</span><span class="lang-en">Stay 14–30 nights in a traditional home, continue your work or creative practice, and build a lasting relationship with Noto.</span></p><div class="hero-facts" aria-label="Program facts"><span>2026.08–12</span><span>NANAO / NOTO</span><span><span class="lang-ja">10名募集</span><span class="lang-en">10 PEOPLE</span></span><span><span class="lang-ja">連続14〜30泊</span><span class="lang-en">14–30 NIGHTS</span></span></div><div class="hero-actions"><a class="button button-gold" href="${applicationForm}" target="_blank" rel="noreferrer"><span class="lang-ja">フリーアコモデーションに応募</span><span class="lang-en">Apply for Free Accommodation</span> <span aria-hidden="true">↗</span></a></div><p class="hero-cta-note"><span class="lang-ja">選考された10名は宿泊費無料。交通費、食費、生活費、保険・ビザ、有料体験などは自己負担です。</span><span class="lang-en">Accommodation is free for ten selected participants. Travel, food, living costs, insurance or visa, and paid activities are self-funded.</span></p><a class="hero-about-link" href="https://noto.nomadresort.jp/"><span class="lang-ja">能登とは？ 能登の文化と地域について知る</span><span class="lang-en">New to Noto? Explore the culture and region</span> <span aria-hidden="true">↗</span></a></div><p class="hero-side-note">FREE ACCOMMODATION / NANAO, NOTO</p></section>`;
html = html.replace(oldHero, hero);

const selection = extractSection(html, '<section class="selection-section"');
let collaboration = extractSection(html, '<section class="collaboration-section"');
const festival = extractSection(html, '<section class="festival-section"');
const notojima = extractSection(html, '<section class="notojima-section"');
const itinerary = extractSection(html, '<section class="itinerary-section"');
const famValue = extractSection(html, '<section class="fam-value-section"');
let free = extractSection(html, '<section class="free-section"');
let faq = extractSection(html, '<section class="faq-section shell"');
let commitment = extractSection(html, '<section class="commitment-section"');
let requirements = extractSection(html, '<section class="requirements-section"');

for (const section of [selection, collaboration, festival, notojima, itinerary, famValue, free, faq, commitment, requirements]) {
  html = removeOnce(html, section);
}

free = free.replace("02 / FREE ACCOMMODATION", "01 / FREE ACCOMMODATION");

faq = faq
  .replace("FAM Tourの宿泊はどうなりますか？", "フリーアコモの宿泊はどうなりますか？")
  .replace("How is FAM Tour accommodation arranged?", "How is Free Accommodation arranged?")
  .replace(
    "9月18日から23日までの5泊を、運営側が能登島ゲストハウス葉波（HANAMI）にまとめて手配し、宿泊費も負担します。参加者による個別予約・宿泊費の支払いは不要です。",
    "七尾市内の運営指定の古民家に、専用の和室1室と日本式布団を用意します。選考された本人の14〜30泊の宿泊費は無料です。バスまたはシャワー、トイレ、キッチンは共用です。",
  )
  .replace(
    "The organizing team will arrange and cover all five nights, September 18–23, at Notojima Guesthouse HANAMI. Participants do not need to book or pay for the stay themselves.",
    "Selected participants receive a private tatami room with a Japanese futon in an organizer-designated traditional house in Nanao for 14–30 nights. The stay is free; bath or shower, toilet, and kitchen are shared.",
  )
  .replace(
    "指定する集合場所までの往復交通費と、滞在中の私的な移動費は参加者負担です。公式工程内で運営が手配する移動は運営が負担します。",
    "能登までの往復交通費と、滞在中の移動費は参加者負担です。交通、食費、生活費、保険・ビザ、有料体験なども自己負担となります。",
  )
  .replace(
    "Travel to and from the designated meeting point, plus personal transportation during the stay, is at the participant’s expense. Transportation arranged by the organizer within the official itinerary is covered.",
    "Travel to and from Noto and transportation during the stay are self-funded. Food, living costs, insurance or visa, paid activities, and other personal expenses are also the participant’s responsibility.",
  )
  .replace("FAM Tourは選考された参加者本人の参加を基本とします。", "")
  .replace(" The FAM Tour is designed for selected participants themselves.", "");

const famCommitment = commitment.match(/<article><p class="card-number">01 \/ FAM TOUR<\/p>.*?<\/article>/)?.[0];
if (!famCommitment) throw new Error("Missing FAM commitment card");
commitment = commitment
  .replace(famCommitment, "")
  .replace("02 / FREE ACCOMMODATION", "01 / FREE ACCOMMODATION");

const famRequirement = requirements.match(/<article class="requirement-card fam-requirement">.*?<\/article>/)?.[0];
if (!famRequirement) throw new Error("Missing FAM requirement card");
requirements = requirements
  .replace(famRequirement, "")
  .replace("02 / FREE ACCOMMODATION", "01 / FREE ACCOMMODATION")
  .replace('<span class="lang-ja">募集要項</span>', '<span class="lang-ja">フリーアコモ募集要項</span>')
  .replace('<span class="lang-en">Application details</span>', '<span class="lang-en">Free Accommodation details</span>')
  .replace('<span class="lang-ja">今すぐ応募 — 1つまたは両方を選択</span>', '<span class="lang-ja">フリーアコモデーションに応募</span>')
  .replace('<span class="lang-en">Apply now — choose one or both programs</span>', '<span class="lang-en">Apply for Free Accommodation</span>')
  .replace(
    '<span class="lang-ja">共通フォームの最初に、FAM Tour、フリーアコモ、または両方を選択します。</span>',
    '<span class="lang-ja">応募フォームでは「フリーアコモデーション」を選択してください。</span>',
  )
  .replace(
    '<span class="lang-en">Choose the FAM Tour, Free Accommodation, or both at the start of the shared form.</span>',
    '<span class="lang-en">Choose “Free Accommodation” in the application form.</span>',
  );

const archiveNotice = `<section class="fam-ended" id="fam-archive" aria-labelledby="fam-archive-title"><div class="fam-ended-inner shell"><div><p class="fam-ended-status">2026 FAM TOUR / ARCHIVE</p><h2 id="fam-archive-title"><span class="lang-ja">2026年のFAMツアーは終了しました。</span><span class="lang-en">The 2026 FAM Tour has ended.</span></h2></div><p class="fam-ended-copy"><span class="lang-ja">ご参加ありがとうございました。以下には、お熊甲祭と能登島をめぐったFAMツアーの内容を記録として残しています。</span><span class="lang-en">Thank you to everyone who joined us. The sections below remain as an archive of the FAM Tour around the Okuma Kabuto Festival and Notojima.</span></p></div></section>`;

const reordered = `${free}${collaboration}${faq}${commitment}${requirements}${archiveNotice}${festival}${notojima}${itinerary}${famValue}`;
html = html.replace(hero, `${hero}${reordered}`);

const languageScript = `<script>(()=>{const root=document.documentElement;const buttons=[...document.querySelectorAll('.language-toggle button')];const setLanguage=(lang)=>{root.dataset.lang=lang;root.lang=lang;buttons.forEach((button,index)=>{const active=(index===0?'en':'ja')===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});try{localStorage.setItem('noto-language',lang)}catch{}};let initial='en';try{initial=localStorage.getItem('noto-language')||(navigator.language.toLowerCase().startsWith('ja')?'ja':'en')}catch{}buttons.forEach((button,index)=>button.addEventListener('click',()=>setLanguage(index===0?'en':'ja')));setLanguage(initial);})();</script>`;
html = html.replace("</main></body></html>", `</main>${languageScript}</body></html>`);

await writeFile(pageUrl, `${html}\n`);
console.log("Promoted Free Accommodation and archived the completed FAM Tour.");
