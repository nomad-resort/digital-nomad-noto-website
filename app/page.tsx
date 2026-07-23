import { LanguageToggle } from "./LanguageToggle";

const freeAccommodationForm =
  "https://docs.google.com/forms/d/1I1u-Rj2LemqzpfA9U4yaZ7aWhX-qxBflv-BbSKhwcDc/viewform";
const termsUrl =
  "https://docs.google.com/document/d/15L_SeddyQqgLDfAUR0YoSNgm1MCK-0DCpEkQWWS0GFA/edit";
const instagramUrl = "https://www.instagram.com/nomadresort_noto/";
const officialUrl = "https://noto.nomadresort.jp/ja/";
const festivalUrl = "https://okumakabuto.jp/";
const hanamiUrl = "https://www.hanaminotojima.com/";
const notojimaTourismUrl = "https://www.notojima.org/whatplace";

type Copy = { ja: string; en: string };

const famActivities: Copy[] = [
  { ja: "お熊甲祭への参加", en: "Participate in the Okuma Kabuto Festival" },
  { ja: "稲刈り体験", en: "Rice harvesting" },
  { ja: "七尾まち歩き", en: "Walk through old Nanao" },
  { ja: "コワーキング体験", en: "Local coworking" },
  { ja: "能登島で過ごす自由時間", en: "Slow time on Notojima" },
  { ja: "ローカルクッキングナイト", en: "Local cooking night" },
  { ja: "地域の方との交流", en: "Meet the local community" },
];

const journeyDays = [
  {
    date: "16",
    label: { ja: "到着・つながる", en: "Arrive & connect" },
    title: { ja: "能登島で、旅の仲間と出会う。", en: "Meet your people on Notojima." },
    text: { ja: "能登へ到着し、チェックイン。夜はウェルカムBBQで、参加者と地域の方が同じ食卓を囲みます。", en: "Arrive in Noto, settle in, and share a welcome BBQ with fellow participants and local hosts." },
  },
  {
    date: "17",
    label: { ja: "まち・仕事", en: "Town & work" },
    title: { ja: "七尾のまちを歩き、いつもの仕事をする。", en: "Walk old Nanao, then get back to work." },
    text: { ja: "一本杉通りの商いと文化に触れ、ローカルなコワーキングへ。夜は七尾の食と人に出会います。", en: "Explore the shops and culture of Ipponsugi, work from a local coworking space, and meet Nanao over dinner." },
  },
  {
    date: "18",
    label: { ja: "里山・収穫", en: "Satoyama & harvest" },
    title: { ja: "土に触れ、能登の食の始まりを知る。", en: "Touch the soil and discover where Noto’s food begins." },
    text: { ja: "島の朝を走り、午後は稲刈りへ。景色としてではなく、手を動かして里山と関わる一日です。", en: "Run through the island morning, then join the rice harvest and experience satoyama through your own hands." },
  },
  {
    date: "19",
    label: { ja: "祭りの前日", en: "Festival eve" },
    title: { ja: "祭りを迎える地域の時間に入る。", en: "Step into the community as it prepares." },
    text: { ja: "ゆっくりと島で過ごした後、中島町へ。祭りを支える人々と出会い、翌日に向けた地域の空気を感じます。", en: "Spend a slow morning on the island, then head to Nakajima and meet the people preparing for the day ahead." },
  },
  {
    date: "20",
    label: { ja: "お熊甲祭", en: "Okuma Kabuto Festival" },
    title: { ja: "深紅の枠旗と、地域の熱の中へ。", en: "Enter a world of crimson banners and living tradition." },
    text: { ja: "猿田彦、神輿、鉦と太鼓、天を突く枠旗。受け継がれてきた祭りを、地域のすぐそばで体験します。", en: "Sarutahiko, mikoshi, bells, drums, and towering crimson banners—experience a tradition carried forward by the community." },
    featured: true,
  },
  {
    date: "21",
    label: { ja: "余白・食卓", en: "Pause & table" },
    title: { ja: "島で振り返り、土地の味を囲む。", en: "Reflect on the island and gather around local food." },
    text: { ja: "自由な時間で仕事や制作を進め、夜はクッキングナイトへ。体験したことを言葉にする一日です。", en: "Use the open hours for work or creation, then gather for cooking night and put the week into words." },
  },
  {
    date: "22",
    label: { ja: "次の関係へ", en: "Carry it forward" },
    title: { ja: "旅を終え、能登との関係を始める。", en: "Leave the trip. Begin a relationship with Noto." },
    text: { ja: "チェックアウトして帰路へ。ここで生まれた出会いを、作品、仕事、再訪へとつないでいきます。", en: "Check out and travel onward, carrying new relationships into future work, creative projects, and return visits." },
  },
];

const nomadTourPillars = [
  {
    number: "01",
    title: { ja: "地域の中へ入る", en: "Access beyond tourism" },
    text: { ja: "観光スポットを巡るだけでなく、地域の方の紹介を通じて、祭り、仕事、食卓の内側へ。", en: "Go beyond sightseeing through local introductions that open doors to the festival, everyday work, and shared tables." },
  },
  {
    number: "02",
    title: { ja: "仕事を続けられる余白", en: "A workable rhythm" },
    text: { ja: "コワーキングと自由時間を工程に組み込み、リモートの仕事や自分の制作を止めずに参加できます。", en: "Coworking and open hours are built into the week so remote work and creative practice can continue." },
  },
  {
    number: "03",
    title: { ja: "5名だから生まれる関係", en: "A five-person cohort" },
    text: { ja: "大人数のツアーではなく5名限定。参加者同士も、地域の方とも、顔の見える関係を育てます。", en: "Limited to five participants, creating the space for genuine relationships within the group and with local people." },
  },
];

const famSchedule = [
  {
    date: "16",
    day: "WED",
    events: [
      { time: "07:00–14:00", title: { ja: "能登へ移動", en: "Transfer to Noto" }, place: { ja: "鉄道または飛行機", en: "Train or flight" }, kind: "optional" },
      { time: "14:00–19:00", title: { ja: "受付", en: "Registration" }, place: { ja: "能登島・ハナミ", en: "Notojima Hanami" }, kind: "optional" },
      { time: "19:00–22:00", title: { ja: "ウェルカムBBQ", en: "Welcome BBQ" }, place: { ja: "ハナミ", en: "Hanami" }, kind: "included" },
    ],
  },
  {
    date: "17",
    day: "THU",
    events: [
      { time: "10:00–17:00", title: { ja: "七尾・一本杉通りまち歩き", en: "Nanao old street experience" }, place: { ja: "一本杉通り", en: "Ipponsugi" }, kind: "included-mark" },
      { time: "10:00–17:00", title: { ja: "コワーキング", en: "Co-Working" }, place: { ja: "Noras Office", en: "Noras Office" }, kind: "included-mark" },
      { time: "17:00–21:00", title: { ja: "居酒屋交流会", en: "Izakaya party" }, place: { ja: "かもめ食堂", en: "Kamome Shokudo" }, kind: "included" },
      { time: "19:00–22:00", title: { ja: "カラオケ", en: "Karaoke" }, place: { ja: "サンバ", en: "Samba" }, kind: "optional" },
    ],
  },
  {
    date: "18",
    day: "FRI",
    events: [
      { time: "07:00–10:00", title: { ja: "ジョギング", en: "Jogging" }, place: { ja: "能登島", en: "Notojima" }, kind: "included-mark" },
      { time: "12:00–14:00", title: { ja: "昼食", en: "Lunch" }, place: { ja: "各自負担", en: "Self-pay" }, kind: "optional" },
      { time: "14:00–17:00", title: { ja: "稲刈り", en: "Rice harvesting" }, place: { ja: "能登島", en: "Notojima" }, kind: "included-mark" },
      { time: "19:00–22:00", title: { ja: "夕食", en: "Dinner" }, place: { ja: "各自負担", en: "Self-pay" }, kind: "optional" },
    ],
  },
  {
    date: "19",
    day: "SAT",
    events: [
      { time: "07:00–13:00", title: { ja: "島で自由時間", en: "Island chillout" }, place: { ja: "能登島・ハナミ", en: "Notojima Hanami" }, kind: "optional" },
      { time: "12:00–14:00", title: { ja: "昼食", en: "Lunch" }, place: { ja: "各自負担", en: "Self-pay" }, kind: "optional" },
      { time: "14:00–22:00", title: { ja: "祭りの準備・地域交流", en: "Festival preparation & local exchange" }, place: { ja: "七尾市中島町", en: "Nakajima, Nanao" }, kind: "included" },
    ],
  },
  {
    date: "20",
    day: "SUN",
    events: [
      { time: "07:00–22:00", title: { ja: "お熊甲祭", en: "Okuma Kabuto Festival" }, place: { ja: "七尾市中島町", en: "Nakajima, Nanao" }, kind: "included" },
    ],
  },
  {
    date: "21",
    day: "MON",
    events: [
      { time: "07:00–13:00", title: { ja: "島で自由時間", en: "Island chillout" }, place: { ja: "能登島・ハナミ", en: "Notojima Hanami" }, kind: "optional" },
      { time: "12:00–14:00", title: { ja: "昼食", en: "Lunch" }, place: { ja: "各自負担", en: "Self-pay" }, kind: "optional" },
      { time: "17:00–22:00", title: { ja: "クッキングナイト", en: "Cooking Night" }, place: { ja: "Namiha", en: "Namiha" }, kind: "included" },
    ],
  },
  {
    date: "22",
    day: "TUE",
    events: [
      { time: "07:00–10:00", title: { ja: "チェックアウト", en: "Check out" }, place: { ja: "各自手配の宿", en: "Self-arranged accommodation" }, kind: "optional" },
      { time: "10:00–14:00", title: { ja: "帰路へ", en: "Transfer" }, place: { ja: "鉄道または飛行機", en: "Train or flight" }, kind: "optional" },
    ],
  },
];

const freeCategories = [
  {
    title: { ja: "クリエイティブ", en: "Creative" },
    text: { ja: "デザイナー、フォトグラファー、映像クリエイター、ライター、アーティスト", en: "Designers, photographers, filmmakers, writers, and artists" },
  },
  {
    title: { ja: "食", en: "Food" },
    text: { ja: "シェフ、料理人、パティシエ、食とガストロノミーに関心がある方", en: "Chefs, cooks, pastry chefs, and people interested in food and gastronomy" },
  },
  {
    title: { ja: "ビジネス", en: "Business" },
    text: { ja: "起業家、リモートワーカー、スタートアップ関係者、コミュニティビルダー", en: "Entrepreneurs, remote workers, startup professionals, and community builders" },
  },
  {
    title: { ja: "地域共創", en: "Local Co-creation" },
    text: { ja: "一次産業、工芸、伝統文化に関心があり、地域と共に取り組みたい方", en: "People interested in primary industries, crafts, and traditional culture who want to work with local communities" },
  },
];

const faqs = [
  {
    q: { ja: "FAM Tourの宿泊は参加費に含まれますか？", en: "Is accommodation included in the FAM Tour?" },
    a: { ja: "含まれません。9月16日から22日までの6泊は参加者自身で予約・支払いを行います。滞在エリアや移動しやすい宿は、参加決定後に運営からご案内します。", en: "No. Participants book and pay for all six nights from September 16 to 22. We will suggest convenient areas and accommodation options after selection." },
  },
  {
    q: { ja: "交通費の補助はありますか？", en: "Is travel subsidized?" },
    a: { ja: "ありません。能登までの往復交通費と、滞在中の私的な移動費は参加者の負担です。FAM Tour、Free Accommodation Programのどちらも同様です。", en: "No. Round-trip travel to Noto and personal transportation during your stay are at your own expense for both programs." },
  },
  {
    q: { ja: "カップルや家族でも参加できますか？", en: "Can couples or families participate?" },
    a: { ja: "パートナーとの滞在は、施設の空きと定員に応じて相談できます。ただし無料対象は選考された本人のみで、同伴者には宿泊費がかかります。お子さまを含む家族は個別にご相談ください。", en: "Staying with a partner may be possible depending on room capacity. Only the selected participant receives free accommodation; companions must pay. Families with children should contact us before applying." },
  },
  {
    q: { ja: "食事やビーガン対応について教えてください。", en: "What meals and vegan options are available?" },
    a: { ja: "Free Accommodation Programの日常の食事は原則自己手配です。交流の食事会などでは、事前申告に基づき可能な範囲で対応しますが、地域や調理環境により完全対応を保証できない場合があります。FAM Tourは工程表でIncludedと表示された食事・プログラムのみ含まれます。", en: "Daily meals in the Free Accommodation Program are self-arranged. For hosted meals, we will accommodate dietary needs where possible if notified in advance, but cannot guarantee full vegan support in every local kitchen. The FAM Tour includes only items marked Included in the itinerary." },
  },
  {
    q: { ja: "選考で重視することは何ですか？", en: "What matters in the selection process?" },
    a: { ja: "地域への敬意、専門性、滞在中に実行したいこと、そして滞在後も能登との関係を育てる意思を重視します。", en: "We value respect for local life, relevant skills, a clear idea of what you want to do during your stay, and a willingness to continue your relationship with Noto afterward." },
  },
  {
    q: { ja: "キャンセルはできますか？", en: "What is the cancellation policy?" },
    a: { ja: "日程変更やキャンセルが必要になった場合は、分かった時点ですぐにご連絡ください。Free Accommodation Programでは、チェックイン13日前以降に運営が負担済みの返金不可実費をお願いする場合があります。詳細は応募前に規約をご確認ください。", en: "Contact us as soon as you know your plans have changed. For the Free Accommodation Program, cancellations within 13 days of check-in may require reimbursement of non-refundable costs already paid by the organizer. Please review the full terms before applying." },
  },
];

function Bi({ ja, en }: Copy) {
  return (
    <>
      <span className="lang-ja">{ja}</span>
      <span className="lang-en">{en}</span>
    </>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <LanguageToggle />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nomad Resort Noto home">
          <span>NOMAD RESORT</span>
          <strong>NOTO</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#programs">Programs</a>
          <a href="#notojima">Notojima</a>
          <a href="#stay">Stay</a>
          <a href="#why-noto">Why Noto</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#programs">
          <Bi ja="募集を見る" en="Explore" /> <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/noto/hero-fire.avif" alt="" />
        <div className="hero-shade" />
        <img className="hero-map" src="/noto/hero-map.svg" alt="" />
        <div className="hero-collage" aria-hidden="true">
          <img className="collage-one" src="/noto/hero-hq-1.avif" alt="" />
          <img className="collage-two" src="/noto/hero-hq-2.avif" alt="" />
          <img className="collage-three" src="/noto/hero-hq-3.avif" alt="" />
          <img className="collage-four" src="/noto/okumakabuto-04.jpg" alt="" />
          <img className="collage-five" src="/noto/hero-hq-4.avif" alt="" />
          <img className="collage-six" src="/noto/hero-hq-5.avif" alt="" />
          <img className="collage-seven" src="/noto/hero-hq-6.avif" alt="" />
          <img className="collage-eight" src="/noto/culture2.avif" alt="" />
          <img className="collage-nine" src="/noto/culture3.avif" alt="" />
          <img className="collage-ten" src="/noto/culture4.avif" alt="" />
          <img className="collage-eleven" src="/noto/accommodation1.webp" alt="" />
          <img className="collage-twelve" src="/noto/okumakabuto-03.jpg" alt="" />
        </div>
        <div className="hero-content shell">
          <h1 id="hero-title" className="sr-only">Nomad Resort Noto 2026</h1>
          <img className="hero-noto-word" src="/noto/hero-noto.svg" alt="NOTO" />
          <p className="hero-site-line">The Japan guidebooks can’t show you.</p>
          <p className="hero-program-line">FAM TOUR / FREE ACCOMMODATION — 2026</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#fam">
              <Bi ja="FAM Tourを見る" en="Explore the FAM Tour" /> <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#free-accommodation">
              <Bi ja="フリーアコモを見る" en="Explore Free Accommodation" /> <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="scroll-mark">SCROLL TO DISCOVER</p>
      </section>

      <section className="manifesto shell" id="why-noto">
        <div>
          <p className="eyebrow">THE LAST UNTOUCHED JAPAN</p>
          <h2><Bi ja="ガイドブックだけでは出会えない、能登へ。" en="Discover the Noto no guidebook can show you." /></h2>
        </div>
        <div className="manifesto-copy">
          <p><Bi ja="海と里山、食と工芸、祭りと日々の仕事。能登の魅力は、景色だけではありません。人の暮らしの中に入り、同じ時間を過ごすことで、はじめて見えてくるものがあります。" en="Sea and satoyama. Food and craft. Festivals and everyday work. Noto is more than scenery. Its real character appears when you step into local life and share time with the people who live here." /></p>
          <p><Bi ja="私たちが出会いたいのは、地域を尊重し、能登の未来を一緒につくる仲間です。" en="We want to meet people who respect the community and want to help shape Noto’s future together." /></p>
        </div>
      </section>

      <section className="notojima-intro" id="notojima" aria-labelledby="notojima-title">
        <div className="notojima-photo">
          <img src="/noto/notojima-bridge.jpg" alt="Notojima Bridge crossing the calm waters of Nanao Bay" />
          <p>NOTOJIMA / NANAO BAY / ISHIKAWA</p>
          <a href="https://www.hot-ishikawa.jp/spot/detail_6107.html" target="_blank" rel="noreferrer">
            PHOTO / ISHIKAWA TOURISM FEDERATION ↗
          </a>
        </div>
        <div className="notojima-copy">
          <p className="eyebrow">AN ISLAND IN THE CALM SEA</p>
          <h2 id="notojima-title"><Bi ja="能登島とは？" en="What is Notojima?" /></h2>
          <p className="notojima-lead">
            <Bi
              ja="七尾湾の穏やかな海に浮かぶ、周囲約72kmの島。海、里山、集落が近い距離でつながり、半農半漁の暮らしが今も息づいています。"
              en="An island of roughly 72 kilometres around, floating in the calm waters of Nanao Bay. Sea, satoyama, and small settlements sit close together, carrying forward a way of life shaped by both farming and fishing."
            />
          </p>
          <div className="notojima-facts">
            <div><strong>72km</strong><span><Bi ja="島の周囲" en="Around the island" /></span></div>
            <div><strong>20</strong><span><Bi ja="島にある町" en="Island communities" /></span></div>
            <div><strong>1982</strong><span><Bi ja="能登島大橋が開通" en="Notojima Bridge opened" /></span></div>
          </div>
          <p className="notojima-detail">
            <Bi
              ja="橋で本土とつながった今も、島の時間はゆっくりと流れています。漁港の朝、田畑の季節、静かな入り江、地域の食卓。観光施設を巡るだけでは見えない日常こそ、この旅で出会ってほしい能登島です。"
              en="Although a bridge now connects it to the mainland, the island still moves at its own pace: early mornings at the fishing harbour, seasonal fields, quiet coves, and local tables. This everyday life—not only its visitor attractions—is the Notojima we want you to discover."
            />
          </p>
          <a className="text-link" href={notojimaTourismUrl} target="_blank" rel="noreferrer">
            <Bi ja="能登島についてもっと知る" en="Discover more about Notojima" /> <Arrow />
          </a>
        </div>
      </section>

      <section className="programs" id="programs" aria-labelledby="programs-title">
        <div className="section-head shell">
          <p className="eyebrow">TWO WAYS TO LIVE IN NOTO</p>
          <h2 id="programs-title"><Bi ja="あなたらしい能登との関わり方を。" en="Choose your way to connect with Noto." /></h2>
        </div>
        <div className="program-grid shell">
          <a className="program-card fam-card" href="#fam">
            <span className="card-number">01</span>
            <div>
              <p className="card-kicker">6 NIGHTS / 5 PARTICIPANTS</p>
              <h3>FAM Tour</h3>
              <p><Bi ja="お熊甲祭と地域の暮らしに触れ、自分の視点で能登の魅力を届ける7日間。" en="Seven days inside the Okuma Kabuto Festival and the everyday life of Noto, shared through your own perspective." /></p>
            </div>
            <div className="card-meta">
              <time dateTime="2026-09-16">2026.09.16</time>
              <span>—</span>
              <time dateTime="2026-09-22">09.22</time>
              <Arrow />
            </div>
          </a>
          <a className="program-card free-card" href="#free-accommodation">
            <span className="card-number">02</span>
            <div>
              <p className="card-kicker">AUG–DEC / 10 PARTICIPANTS</p>
              <h3>Free Accommodation</h3>
              <p><Bi ja="古民家を拠点に仕事や創作を続けながら、地域と新しい価値をつくる長期滞在。" en="A longer stay in a traditional home where work, creativity, and local collaboration come together." /></p>
            </div>
            <div className="card-meta">
              <span>2026.08</span><span>—</span><span>12</span><Arrow />
            </div>
          </a>
        </div>
      </section>

      <section className="stay-section" id="stay" aria-labelledby="stay-title">
        <div className="stay-heading shell">
          <p className="eyebrow">WHERE YOU WILL STAY</p>
          <h2 id="stay-title"><Bi ja="能登での、もう一つの居場所。" en="A place to belong while you are in Noto." /></h2>
          <p>
            <Bi
              ja="ホテルに泊まるのではなく、島や地域の暮らしに近い場所を拠点にします。プログラムによって宿泊の扱いが異なるため、下記をご確認ください。"
              en="Rather than staying apart from local life, each program uses a base close to the island and its community. Accommodation arrangements differ by program, so please review the details below."
            />
          </p>
        </div>

        <article className="stay-card stay-card-hanami shell">
          <div className="stay-gallery">
            <img className="stay-main-image" src="/noto/hanami-living.png" alt="Sea-facing living room at Notojima Guesthouse HaNaMi" />
            <img className="stay-small-image" src="/noto/hanami-kitchen.png" alt="Shared kitchen at Notojima Guesthouse HaNaMi" />
            <a className="stay-photo-credit" href={hanamiUrl} target="_blank" rel="noreferrer">PHOTO / HANAMI OFFICIAL SITE ↗</a>
          </div>
          <div className="stay-copy">
            <div className="stay-label-row">
              <span>FAM TOUR</span>
              <strong><Bi ja="推奨滞在先・各自手配" en="Recommended stay / Self-booked" /></strong>
            </div>
            <p className="eyebrow">NOTOJIMA GUESTHOUSE HANAMI</p>
            <h3><Bi ja="能登島ゲストハウス 葉波" en="Notojima Guesthouse HaNaMi" /></h3>
            <p className="stay-lead">
              <Bi
                ja="向田漁港のそばにある、海に面したゲストハウス。畳の和室に布団を敷く宿泊スタイルで、海を望むリビングや共用キッチンを使いながら、島で暮らすように過ごせます。"
                en="A guesthouse by Koda fishing harbour, facing the sea. Guests sleep on futons in Japanese-style tatami rooms and can use the sea-view living room and shared kitchen for a stay that feels close to island life."
              />
            </p>
            <ul className="stay-features">
              <li><Bi ja="和室・布団の客室" en="Tatami rooms with futon bedding" /></li>
              <li><Bi ja="海に面した共用リビング" en="Shared sea-facing living room" /></li>
              <li><Bi ja="共用キッチン・Wi-Fi・ランドリー" en="Shared kitchen, Wi-Fi, and laundry" /></li>
              <li><Bi ja="七尾市能登島向田町" en="Koda, Notojima, Nanao" /></li>
            </ul>
            <p className="stay-note">
              <Bi
                ja="※FAM Tourの参加パスに宿泊費は含まれません。空室状況・料金・予約条件は、HANAMI公式サイトで必ずご確認ください。"
                en="Accommodation is not included in the FAM Tour participation pass. Please confirm availability, rates, and booking conditions directly on the HaNaMi website."
              />
            </p>
            <a className="button button-dark" href={hanamiUrl} target="_blank" rel="noreferrer">
              <Bi ja="HANAMI公式サイトへ" en="Visit the HaNaMi website" /> <Arrow />
            </a>
          </div>
        </article>

        <article className="stay-card stay-card-example shell">
          <div className="stay-copy">
            <div className="stay-label-row">
              <span>FREE ACCOMMODATION</span>
              <strong><Bi ja="滞在例" en="Stay example" /></strong>
            </div>
            <p className="eyebrow">TRADITIONAL HOUSE STAY</p>
            <h3><Bi ja="地域の古民家を、暮らしの拠点に。" en="Make a local traditional house your base." /></h3>
            <p className="stay-lead">
              <Bi
                ja="フリーアコモデーションでは、運営が指定する古民家などに滞在する想定です。地域の日常に近い環境で、仕事や制作を続けながら、能登での生活を体験します。"
                en="Free Accommodation participants are expected to stay in an organizer-designated traditional house or similar property, continuing their work or creative practice in a setting close to everyday life in Noto."
              />
            </p>
            <ul className="stay-features">
              <li><Bi ja="仕事や制作を続けられる滞在環境" en="A base for remote work and creative practice" /></li>
              <li><Bi ja="地域コミュニティに近い暮らし" en="Daily life close to the local community" /></li>
              <li><Bi ja="運営による滞在・地域案内" en="Stay and community orientation from the team" /></li>
            </ul>
            <p className="stay-note">
              <Bi
                ja="※掲載している写真・設備・間取りは滞在イメージの一例です。実際の施設、部屋、共用設備、滞在条件は、選考後に個別にご案内します。"
                en="The photographs, facilities, and layout shown here are examples only. The actual property, room, shared facilities, and stay conditions will be confirmed individually after selection."
              />
            </p>
          </div>
          <div className="stay-gallery example-gallery">
            <img className="stay-main-image" src="/noto/accommodation1.webp" alt="Example of a traditional house stay in Noto" />
            <img className="stay-small-image" src="/noto/accommodation2.webp" alt="Example shared space in a traditional house in Noto" />
            <span className="example-badge"><Bi ja="滞在イメージ" en="STAY EXAMPLE" /></span>
          </div>
        </article>
      </section>

      <section className="fam-section" id="fam" aria-labelledby="fam-title">
        <div className="fam-visual">
          <img src="/noto/okumakabuto-04.jpg" alt="Okuma Kabuto Festival in Nanao, Noto" />
          <a className="fam-photo-credit" href={festivalUrl} target="_blank" rel="noreferrer">PHOTO / OKUMA KABUTO FESTIVAL OFFICIAL SITE ↗</a>
          <div className="fam-date-stamp">
            <span>SEP.</span><strong>16—22</strong><small>2026 / 6 NIGHTS</small>
          </div>
        </div>
        <div className="fam-content shell">
          <div className="program-heading">
            <p className="eyebrow light">01 / FAM TOUR</p>
            <h2 id="fam-title"><Bi ja="祭りとともに、能登を暮らす7日間。" en="Seven days living with Noto and its festival." /></h2>
            <p className="program-intro"><Bi ja="数百年受け継がれてきたお熊甲祭の熱気、人とのつながり、食文化、自然、暮らし。地域の方と同じ時間を過ごし、能登の日常に触れながら、その魅力をあなた自身の視点で届けてください。" en="Experience the energy of the centuries-old Okuma Kabuto Festival, along with Noto’s people, food, nature, and everyday life. Spend time with the community, then share what you discover through your own perspective." /></p>
          </div>

          <div className="fact-row">
            <div><span>DATES</span><strong>2026.09.16–22</strong></div>
            <div><span>PLACE</span><strong><Bi ja="能登島・七尾" en="Notojima & Nanao" /></strong></div>
            <div><span>PEOPLE</span><strong><Bi ja="5名限定" en="Limited to 5" /></strong></div>
          </div>

          <section className="festival-explainer" aria-labelledby="festival-title">
            <div className="festival-images">
              <img className="festival-image-main" src="/noto/okumakabuto-01.jpg" alt="Sarutahiko leading the Okuma Kabuto Festival" />
              <img className="festival-image-wide" src="/noto/okumakabuto-02.jpg" alt="Crimson wakubata banners at the Okuma Kabuto Festival" />
            </div>
            <div className="festival-copy">
              <p className="eyebrow light">WHAT IS OKUMA KABUTO?</p>
              <h3 id="festival-title"><Bi ja="お熊甲祭とは？" en="What is the Okuma Kabuto Festival?" /></h3>
              <p className="festival-lead">
                <Bi
                  ja="七尾市中島町で、毎年9月20日に行われる枠旗祭り。19の末社から神輿が集まり、猿田彦の舞、鉦と太鼓、空へ伸びる深紅の枠旗が町を満たします。"
                  en="Held every September 20 in Nakajima, Nanao, this wakubata banner festival brings together mikoshi from 19 branch shrines, led by Sarutahiko, bells, drums, and towering crimson banners."
                />
              </p>
              <div className="festival-facts">
                <div><strong>9.20</strong><span><Bi ja="毎年同日に開催" en="Held every year" /></span></div>
                <div><strong>19</strong><span><Bi ja="末社から神輿が集結" en="Branch shrines gather" /></span></div>
                <div><strong>20m</strong><span><Bi ja="深紅の大枠旗" en="Crimson banners" /></span></div>
                <div><strong><Bi ja="国指定" en="National" /></strong><span><Bi ja="重要無形民俗文化財" en="Important folk cultural property" /></span></div>
              </div>
              <p className="festival-detail">
                <Bi
                  ja="見どころは、枠旗を地上すれすれまで傾ける大技「島田くずし」。このツアーでは、祭り当日だけでなく、前日から地域に入り、祭りを迎える人々の時間に触れます。"
                  en="A highlight is Shimada Kuzushi, a dramatic feat in which the banners are lowered almost to the ground. The tour enters the community from the day before, revealing not only the festival itself but the people and preparation behind it."
                />
              </p>
              <a className="text-link light-link" href={festivalUrl} target="_blank" rel="noreferrer">
                <Bi ja="お熊甲祭公式サイトを見る" en="Visit the official festival site" /> <Arrow />
              </a>
            </div>
          </section>

          <section className="journey-section" aria-labelledby="journey-title">
            <div className="journey-heading">
              <div>
                <p className="eyebrow light">SEVEN DAYS / ONE LIVING CULTURE</p>
                <h3 id="journey-title"><Bi ja="能登の魅力をギュッと詰め込んだ7日間。" en="Seven days, filled with the essence of Noto." /></h3>
              </div>
              <p>
                <Bi
                  ja="祭りだけでも、ワーケーションだけでもない。まち、仕事、里山、食、地域の人との時間が、一つの旅としてつながります。"
                  en="More than a festival trip or a workation: town life, focused work, satoyama, food, and time with local people come together as one journey."
                />
              </p>
            </div>
            <div className="journey-grid">
              {journeyDays.map((day) => (
                <article className={day.featured ? "journey-day featured" : "journey-day"} key={day.date}>
                  <div className="journey-date"><span>SEP</span><strong>{day.date}</strong></div>
                  <p className="journey-label"><Bi {...day.label} /></p>
                  <h4><Bi {...day.title} /></h4>
                  <p className="journey-text"><Bi {...day.text} /></p>
                </article>
              ))}
            </div>
          </section>

          <div className="fam-details detail-grid">
            <div>
              <h3>Program</h3>
              <ul className="line-list">
                {famActivities.map((item) => <li key={item.ja}><Bi {...item} /></li>)}
              </ul>
            </div>
            <div>
              <h3>Included</h3>
              <ul className="check-list">
                <li><Bi ja="工程表でIncludedと表示された地域アクティビティ" en="Local activities marked Included in the itinerary" /></li>
                <li><Bi ja="ウェルカムBBQ、居酒屋交流会、クッキングナイト" en="Welcome BBQ, izakaya gathering, and cooking night" /></li>
                <li><Bi ja="お熊甲祭、七尾まち歩き、コワーキング、稲刈り" en="Okuma Kabuto Festival, Nanao walk, coworking, and rice harvesting" /></li>
                <li><Bi ja="コミュニティプログラム" en="Community program" /></li>
              </ul>
              <p className="small-note"><Bi ja="※宿泊6泊は自己手配で、参加パスには含まれません。交通費、朝食・昼食、工程表でSelf-payと表示された内容も自己負担です。" en="Six nights of accommodation are self-booked and not included in the participation pass. Transportation, breakfast, lunch, and all Self-pay items are also at your own expense." /></p>
            </div>
          </div>

          <section className="fam-schedule" aria-labelledby="schedule-title">
            <div className="schedule-heading">
              <div>
                <p className="eyebrow light">SEPTEMBER 16—22, 2026</p>
                <h3 id="schedule-title"><Bi ja="工程表（仮）" en="Tentative itinerary" /></h3>
              </div>
              <div className="schedule-legend" aria-label="Itinerary legend">
                <span className="legend-included"><Bi ja="無料／含まれるもの" en="Free / Included" /></span>
                <span className="legend-optional"><Bi ja="任意／自己負担" en="Optional / Self-pay" /></span>
              </div>
            </div>

            <div className="accommodation-alert">
              <span>ACCOMMODATION</span>
              <strong><Bi ja="各自手配／6泊" en="Self-book / 6 nights" /></strong>
              <p><Bi ja="参加パスには含まれません" en="Not included in the participation pass" /></p>
            </div>

            <div className="schedule-days">
              {famSchedule.map((item) => (
                <article className="schedule-day" key={item.date}>
                  <div className="schedule-date"><strong>{item.date}</strong><span>{item.day}</span></div>
                  <div className="schedule-events">
                    {item.events.map((event) => (
                      <div className={`schedule-event ${event.kind}`} key={`${item.date}-${event.time}-${event.title.en}`}>
                        <time>{event.time}</time>
                        <strong><Bi {...event.title} /></strong>
                        <span>@ <Bi {...event.place} /></span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="schedule-notes">
              <p><Bi ja="モーニングコーヒー：参加無料。飲み物代は各自負担です。" en="Morning Coffee: free to join; pay for your own coffee." /></p>
              <p><Bi ja="魚市場の競り見学：参加無料。魚の購入費は各自負担です。" en="Fish Market Auction: free to join; pay for your own fish." /></p>
              <p><Bi ja="有機野菜の収穫：参加費3,000円。" en="Organic vegetable harvesting: participation fee ¥3,000." /></p>
              <small><Bi ja="※地域の状況により、日程・会場・内容は変更になる場合があります。" en="Schedule, venues, and activities may change depending on local conditions." /></small>
            </div>
          </section>

          <section className="nomad-tour-fit" aria-labelledby="nomad-fit-title">
            <div className="nomad-fit-heading">
              <p className="eyebrow light">BUILT FOR REMOTE PROFESSIONALS</p>
              <h3 id="nomad-fit-title"><Bi ja="働きながら、地域と深く出会う旅。" en="A journey designed for meaningful remote travel." /></h3>
            </div>
            <div className="nomad-pillars">
              {nomadTourPillars.map((pillar) => (
                <article key={pillar.number}>
                  <span>{pillar.number}</span>
                  <h4><Bi {...pillar.title} /></h4>
                  <p><Bi {...pillar.text} /></p>
                </article>
              ))}
            </div>
          </section>

          <div className="who-block">
            <p className="eyebrow light">WHO WE ARE LOOKING FOR</p>
            <p className="who-lead"><Bi ja="能登の未来を、一緒につくりたい方へ。" en="For people who want to help shape Noto’s future." /></p>
            <p><Bi ja="地域への敬意を持ち、自分の専門性を生かして、能登の文化や暮らしを丁寧に伝えたい方を歓迎します。映像、写真、デザイン、文章、事業づくりなど、表現の方法は問いません。" en="We welcome people who respect local life and want to use their skills to share Noto’s culture with care—through film, photography, design, writing, entrepreneurship, or another form of expression." /></p>
          </div>

          <a className="button button-gold" href={instagramUrl} target="_blank" rel="noreferrer">
            <Bi ja="FAM Tourの最新募集情報" en="Latest FAM Tour updates" /> <Arrow />
          </a>
        </div>
      </section>

      <section className="free-section" id="free-accommodation" aria-labelledby="free-title">
        <div className="free-photo-grid shell">
          <img className="free-photo-main" src="/noto/accommodation1.webp" alt="Traditional house for a stay in Noto" />
          <img className="free-photo-small" src="/noto/coworking1.webp" alt="Coworking in Noto" />
          <p className="photo-caption">LIVE / WORK / CREATE / CONNECT</p>
        </div>

        <div className="free-content shell">
          <div className="program-heading dark-text">
            <p className="eyebrow">02 / FREE ACCOMMODATION</p>
            <h2 id="free-title"><Bi ja="暮らすように旅をし、能登の未来を一緒につくる。" en="Travel as if you lived here. Help shape Noto’s future." /></h2>
            <p className="program-intro"><Bi ja="古民家を拠点に、数週間から数か月。地域の方と出会い、食卓を囲み、一次産業や伝統文化に触れ、自分の仕事や創作を続けながら暮らす共創プログラムです。" en="Stay in a traditional house for several weeks or months. Meet local people, share meals, discover primary industries and traditional culture, and continue your own work or creative practice as part of this co-creation program." /></p>
          </div>

          <div className="fact-row light-row">
            <div><span>PERIOD</span><strong>2026.08–12</strong></div>
            <div><span>STAY</span><strong><Bi ja="数週間〜数か月" en="Weeks to months" /></strong></div>
            <div><span>PEOPLE</span><strong><Bi ja="10名募集" en="10 participants" /></strong></div>
          </div>

          <div className="included-panel">
            <div>
              <p className="eyebrow">WHAT WE PROVIDE</p>
              <h3><Bi ja="能登で働き、暮らし、つながるための入口。" en="A doorway to work, live, and connect in Noto." /></h3>
            </div>
            <ul className="number-list">
              <li><span>01</span><Bi ja="運営指定古民家での宿泊" en="Accommodation in an organizer-approved traditional house" /></li>
              <li><span>02</span><Bi ja="コワーキング環境" en="Coworking facilities" /></li>
              <li><span>03</span><Bi ja="地域コミュニティへの紹介" en="Introductions to the local community" /></li>
              <li><span>04</span><Bi ja="地域イベントへの参加機会" en="Opportunities to join local events" /></li>
              <li><span>05</span><Bi ja="地元事業者との交流" en="Connections with local businesses" /></li>
              <li><span>06</span><Bi ja="プロジェクトへの参画機会" en="Opportunities to join local projects" /></li>
            </ul>
          </div>

          <div className="category-grid">
            {freeCategories.map((item) => (
              <article key={item.title.en}>
                <h3><Bi {...item.title} /></h3>
                <p><Bi {...item.text} /></p>
              </article>
            ))}
          </div>

          <div className="conditions">
            <div>
              <h3><Bi ja="無料対象" en="What is free" /></h3>
              <p><Bi ja="選考された本人1名の、運営が承認した期間中の宿泊が対象です。" en="Accommodation is free for the selected participant only, during the period approved by the organizer." /></p>
            </div>
            <div>
              <h3><Bi ja="含まれないもの" en="Not included" /></h3>
              <p><Bi ja="交通費、食費、日用品、保険、ビザ関連費用、一部の有料体験、同伴者の宿泊費は含まれません。" en="Transportation, food, daily necessities, insurance, visa-related costs, some paid activities, and companion accommodation are not included." /></p>
            </div>
            <div>
              <h3><Bi ja="同伴者" en="Companions" /></h3>
              <p><Bi ja="パートナーとの滞在は相談可能です。施設の定員確認と、同伴者の宿泊費が必要です。" en="Staying with a partner may be possible, subject to room capacity and a separate accommodation fee." /></p>
            </div>
          </div>

          <div className="application-box">
            <div>
              <p className="eyebrow">APPLICATION</p>
              <h3><Bi ja="能登の未来をつくる仲間へ。" en="Join us in shaping Noto’s future." /></h3>
              <p><Bi ja="応募時点で25歳以上の方が対象です。応募前に詳細規約をご確認ください。" en="Applicants must be 25 or older at the time of application. Please review the detailed terms before applying." /></p>
            </div>
            <div className="application-actions">
              <a className="button button-dark" href={freeAccommodationForm} target="_blank" rel="noreferrer">
                <Bi ja="応募フォームへ" en="Apply now" /> <Arrow />
              </a>
              <a className="text-link" href={termsUrl} target="_blank" rel="noreferrer">
                <Bi ja="詳細規約を読む" en="Read the full terms" /> <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="noto-story">
        <div className="story-grid">
          <img src="/noto/culture1.avif" alt="Life between sea and satoyama in Noto" />
          <div className="story-copy">
            <p className="eyebrow light">WHY NOTO, WHY NOW</p>
            <blockquote><Bi ja="自然と人が一体となって生きる文化。それが能登。" en="A culture where people and nature live as one. That is Noto." /></blockquote>
            <p><Bi ja="海と里山がすぐ隣りにあり、その間に人の営みが息づいています。受け継がれてきた祭りや工芸、食文化は、今も日々の暮らしの中にあります。ここで生まれた出会いが、再訪や新しい仕事、作品、プロジェクトへ育っていく。そんな循環を、私たちは能登からつくります。" en="The sea and satoyama sit side by side, with daily life woven between them. Festivals, craft, and food traditions passed down through generations still belong to everyday life here. We want the connections made in Noto to grow into return visits, new work, creative projects, and lasting relationships." /></p>
            <a className="text-link light-link" href={officialUrl} target="_blank" rel="noreferrer">
              <Bi ja="Nomad Resort Notoをもっと知る" en="Discover more about Nomad Resort Noto" /> <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="faq shell" id="faq" aria-labelledby="faq-title">
        <div className="faq-head">
          <p className="eyebrow">BEFORE YOU APPLY</p>
          <h2 id="faq-title"><Bi ja="よくある質問" en="Frequently asked questions" /></h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q.en}>
              <summary>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-question"><Bi {...item.q} /></span>
                <b aria-hidden="true">＋</b>
              </summary>
              <p><Bi {...item.a} /></p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <img src="/noto/join-team.avif" alt="People connecting in Noto" />
        <div className="final-overlay" />
        <div className="final-content shell">
          <p className="eyebrow light">YOUR SECOND HOMETOWN AWAITS</p>
          <h2><Bi ja="次に能登で会うのは、あなたかもしれない。" en="Maybe we’ll meet you in Noto next." /></h2>
          <div className="hero-actions">
            <a className="button button-gold" href={freeAccommodationForm} target="_blank" rel="noreferrer">
              <Bi ja="フリーアコモに応募" en="Apply for Free Accommodation" /> <Arrow />
            </a>
            <a className="button button-ghost" href={instagramUrl} target="_blank" rel="noreferrer">
              <Bi ja="Instagramをフォロー" en="Follow us on Instagram" /> <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <div className="footer-mark"><span>NOMAD RESORT</span><strong>NOTO</strong></div>
          <p>The Japan guidebooks can’t show you.</p>
          <div className="footer-links">
            <a href={officialUrl} target="_blank" rel="noreferrer">Official Site</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={termsUrl} target="_blank" rel="noreferrer">Terms</a>
          </div>
        </div>
        <p className="copyright">© 2026 Nomad Resort Noto</p>
      </footer>

      <a className="mobile-apply" href={freeAccommodationForm} target="_blank" rel="noreferrer">
        <Bi ja="フリーアコモに応募" en="Apply for Free Accommodation" /> <Arrow />
      </a>
    </main>
  );
}
