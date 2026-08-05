import { LanguageToggle } from "./LanguageToggle";

const applicationForm =
  "https://docs.google.com/forms/d/1I1u-Rj2LemqzpfA9U4yaZ7aWhX-qxBflv-BbSKhwcDc/viewform";
const termsUrl =
  "https://docs.google.com/document/d/15L_SeddyQqgLDfAUR0YoSNgm1MCK-0DCpEkQWWS0GFA/edit";
const instagramUrl = "https://www.instagram.com/nomadresort_noto/";
const officialUrl = "https://noto.nomadresort.jp/ja/";
const festivalUrl = "https://okumakabuto.jp/";
const hanamiUrl = "https://www.hanaminotojima.com/";

type Copy = { ja: string; en: string };

const itinerary: Array<{ date: string; day: string; title: Copy; text: Copy; featured?: boolean }> = [
  {
    date: "16",
    day: "WED",
    title: { ja: "能登島へ到着", en: "Arrive on Notojima" },
    text: { ja: "HANAMIで受付。夜はウェルカムBBQで、参加者と地域の方が同じ食卓を囲みます。", en: "Check in at HANAMI, then share a welcome BBQ with fellow participants and local hosts." },
  },
  {
    date: "17",
    day: "THU",
    title: { ja: "まちと仕事", en: "Town and work" },
    text: { ja: "七尾・一本杉通りを歩き、ローカルなコワーキングへ。夜は七尾の食と人に出会います。", en: "Walk Nanao’s Ipponsugi Street, work locally, and meet the people and food of the city." },
  },
  {
    date: "18",
    day: "FRI",
    title: { ja: "里山と収穫", en: "Satoyama and harvest" },
    text: { ja: "島の朝を過ごし、午後は稲刈りへ。手を動かして能登の食の始まりに触れます。", en: "Spend the morning on the island, then join the rice harvest and discover where Noto’s food begins." },
  },
  {
    date: "19",
    day: "SAT",
    title: { ja: "祭りを迎える時間", en: "The eve of the festival" },
    text: { ja: "能登島での自由時間の後、中島町へ。祭りを支える人々と、前日の空気に触れます。", en: "After a slow island morning, enter Nakajima and meet the people preparing for the festival." },
  },
  {
    date: "20",
    day: "SUN",
    title: { ja: "お熊甲祭", en: "Okuma Kabuto Festival" },
    text: { ja: "猿田彦、神輿、鉦と太鼓、天を突く深紅の枠旗。受け継がれてきた祭りの熱の中へ。", en: "Sarutahiko, mikoshi, bells, drums, and towering crimson banners—step into a living tradition." },
    featured: true,
  },
  {
    date: "21",
    day: "MON",
    title: { ja: "余白と食卓", en: "Space and table" },
    text: { ja: "仕事や制作を進め、夜はローカルクッキングナイトへ。7日間を言葉にする一日です。", en: "Work, create, and gather for a local cooking night to reflect on the week." },
  },
  {
    date: "22",
    day: "TUE",
    title: { ja: "次の関係へ", en: "Carry it forward" },
    text: { ja: "能登島を出発。ここで生まれた出会いを、作品、仕事、再訪へつないでいきます。", en: "Leave Notojima and carry new relationships into creative work, collaboration, and return visits." },
  },
];

const faqs: Array<{ q: Copy; a: Copy }> = [
  {
    q: { ja: "FAM Tourの宿泊はどうなりますか？", en: "How is FAM Tour accommodation arranged?" },
    a: { ja: "9月16日から22日までの6泊を、運営側が能登島ゲストハウス葉波（HANAMI）にまとめて手配します。", en: "The organizing team will arrange all six nights, September 16–22, at Notojima Guesthouse HANAMI." },
  },
  {
    q: { ja: "交通費の補助はありますか？", en: "Is travel subsidized?" },
    a: { ja: "能登までの往復交通費と、滞在中の私的な移動費は参加者負担です。", en: "Round-trip travel to Noto and personal transportation during the stay are at the participant’s expense." },
  },
  {
    q: { ja: "カップルや家族で参加できますか？", en: "Can couples or families participate?" },
    a: { ja: "フリーアコモは施設の空きと定員に応じて相談できます。無料対象は選考された本人のみで、同伴者には宿泊費がかかります。FAM Tourは選考された参加者本人の参加を基本とします。", en: "For Free Accommodation, companions may be possible depending on capacity. Only the selected participant receives free accommodation. The FAM Tour is designed for selected participants themselves." },
  },
  {
    q: { ja: "食事制限には対応できますか？", en: "Can dietary needs be accommodated?" },
    a: { ja: "交流の食事会では、事前申告に基づき可能な範囲で対応します。地域や調理環境により完全対応できない場合があります。", en: "Hosted meals will accommodate dietary needs where possible with advance notice, although every local kitchen may not support all requirements." },
  },
  {
    q: { ja: "選考で重視することは何ですか？", en: "What matters in selection?" },
    a: { ja: "地域への敬意、専門性、能登で実現したいこと、そして滞在後も関係を育てる意思を重視します。", en: "We value respect for local life, relevant skills, a clear purpose in Noto, and a willingness to stay connected afterward." },
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
          <a href="#festival"><Bi ja="お熊甲祭" en="Festival" /></a>
          <a href="#notojima"><Bi ja="能登島" en="Notojima" /></a>
          <a href="#itinerary"><Bi ja="日程" en="Itinerary" /></a>
          <a href="#free"><Bi ja="フリーアコモ" en="Free stay" /></a>
        </nav>
        <a className="header-cta" href="#requirements">
          <Bi ja="募集要項" en="Apply" /> <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/noto/okumakabuto-04.jpg" alt="お熊甲祭の深紅の枠旗" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">NOMAD RESORT NOTO 2026 / FAM TOUR</p>
          <h1 id="hero-title">
            <Bi ja="お熊甲祭の熱と、\n能登の暮らしの中へ。" en="Enter the festival.\nLive the rhythm of Noto." />
          </h1>
          <p className="hero-lead">
            <Bi
              ja="祭りを支える人々の時間に触れ、能登島を拠点に暮らす7日間。"
              en="Seven days inside a living festival, based on the island of Notojima."
            />
          </p>
          <div className="hero-facts" aria-label="Program facts">
            <span>SEP. 16–22</span>
            <span>NOTOJIMA / NANAO</span>
            <span><Bi ja="5名限定" en="5 PEOPLE" /></span>
          </div>
          <div className="hero-actions">
            <a className="button button-gold" href="#requirements">
              <Bi ja="募集要項を見る" en="View application details" /> <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#free">
              <Bi ja="フリーアコモを見る" en="Explore free accommodation" /> <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-side-note">OKUMA KABUTO FESTIVAL / NAKAJIMA, NOTO</p>
      </section>

      <section className="festival-section" id="festival" aria-labelledby="festival-title">
        <div className="festival-grid shell">
          <div className="festival-copy">
            <p className="eyebrow">THE CRIMSON BANNER FESTIVAL</p>
            <h2 id="festival-title">
              <Bi ja="天を貫く深紅の旗。\n能登中島の秋をつなぐ祭り。" en="Crimson banners rising into the sky.\nA festival that binds Nakajima together." />
            </h2>
            <p className="lead-copy">
              <Bi
                ja="お熊甲祭は、七尾市中島町に古くから受け継がれてきた、国指定重要無形民俗文化財の枠旗祭りです。毎年9月20日に行われることから『二十日祭り』とも呼ばれています。"
                en="The Okuma Kabuto Festival is a nationally designated Important Intangible Folk Cultural Property, carried forward for generations in Nakajima, Nanao. Held every September 20, it is also known as the Twentieth-Day Festival."
              />
            </p>
            <p>
              <Bi
                ja="19の末社から神輿が集まり、猿田彦の先導のもと、鉦と太鼓の音とともに約20mの枠旗が進みます。長大な旗を地面すれすれまで傾ける『島田くずし』は、祭り最大の見せ場です。"
                en="Mikoshi from 19 branch shrines gather behind Sarutahiko as bells and drums accompany crimson banners nearly 20 metres tall. Shimada Kuzushi—lowering a vast banner almost to the ground—is the festival’s defining feat."
              />
            </p>
            <p>
              <Bi
                ja="このツアーでは祭り当日だけでなく、前日から中島町に入り、祭りを迎える地域の時間に触れます。"
                en="The tour enters Nakajima from the day before, revealing not only the festival but the people and preparation behind it."
              />
            </p>
            <a className="text-link" href={festivalUrl} target="_blank" rel="noreferrer">
              <Bi ja="お熊甲祭公式サイト" en="Official festival website" /> <Arrow />
            </a>
          </div>
          <div className="festival-media">
            <img className="festival-main-image" src="/noto/okumakabuto-01.jpg" alt="お熊甲祭で行列を先導する猿田彦" />
            <img className="festival-sub-image" src="/noto/okumakabuto-02.jpg" alt="お熊甲祭の深紅の枠旗" />
            <div className="festival-facts">
              <div><strong>9.20</strong><span><Bi ja="毎年開催" en="Every year" /></span></div>
              <div><strong>19</strong><span><Bi ja="末社" en="Branch shrines" /></span></div>
              <div><strong>20m</strong><span><Bi ja="枠旗" en="Crimson banners" /></span></div>
              <div><strong><Bi ja="国指定" en="National" /></strong><span><Bi ja="重要無形民俗文化財" en="Folk cultural property" /></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="notojima-section" id="notojima" aria-labelledby="notojima-title">
        <div className="notojima-intro shell">
          <div>
            <p className="eyebrow">SEVEN DAYS BASED ON THE ISLAND</p>
            <h2 id="notojima-title"><Bi ja="7日間の拠点は、能登島。" en="Your base for seven days: Notojima." /></h2>
          </div>
          <div className="notojima-copy">
            <p>
              <Bi
                ja="能登島は、七尾湾の穏やかな海に浮かぶ島です。漁港、田畑、小さな集落が近い距離にあり、海と里山の両方とともにある暮らしが今も続いています。"
                en="Notojima floats in the calm waters of Nanao Bay. Fishing harbours, fields, and small settlements sit close together, sustaining a way of life shaped by both sea and satoyama."
              />
            </p>
            <p>
              <Bi
                ja="早朝の島を歩く時間、海を見ながら仕事や制作をする時間、稲刈りや地域の食卓に触れる時間。アクティビティの合間にある島の日常も、このツアーの大切なプログラムです。"
                en="Morning walks, quiet hours for work and creation, the rice harvest, and shared local tables: the island’s everyday rhythm between activities is an essential part of the journey."
              />
            </p>
          </div>
        </div>
        <div className="island-image shell">
          <img src="/noto/notojima-bridge.jpg" alt="七尾湾に架かる能登島大橋" />
          <span>NOTOJIMA / NANAO BAY / ISHIKAWA</span>
        </div>

        <article className="hanami-card shell">
          <div className="hanami-gallery">
            <img src="/noto/hanami-living.png" alt="能登島ゲストハウス葉波の海に面したリビング" />
            <img src="/noto/hanami-kitchen.png" alt="能登島ゲストハウス葉波の共用キッチン" />
          </div>
          <div className="hanami-copy">
            <p className="eyebrow">WHERE WE STAY</p>
            <h3><Bi ja="能登島ゲストハウス 葉波" en="Notojima Guesthouse HANAMI" /></h3>
            <p>
              <Bi
                ja="能登島向田町にある、海に面したゲストハウス。和室と布団の客室、海を望む共用リビング、Wi-Fi、共用キッチン、ランドリーを備えています。"
                en="A sea-facing guesthouse in Koda, Notojima, with tatami rooms and futons, a shared living room overlooking the water, Wi-Fi, kitchen, and laundry."
              />
            </p>
            <div className="stay-badge">
              <strong><Bi ja="6泊／運営手配" en="6 nights / arranged by the organizer" /></strong>
              <span>SEP. 16–22, 2026</span>
            </div>
            <a className="text-link" href={hanamiUrl} target="_blank" rel="noreferrer">
              <Bi ja="HANAMI公式サイト" en="HANAMI official website" /> <Arrow />
            </a>
          </div>
        </article>
      </section>

      <section className="itinerary-section" id="itinerary" aria-labelledby="itinerary-title">
        <div className="section-heading shell">
          <p className="eyebrow light">SEPTEMBER 16–22, 2026</p>
          <h2 id="itinerary-title"><Bi ja="能登の魅力を詰め込んだ7日間。" en="Seven days filled with the essence of Noto." /></h2>
          <p><Bi ja="祭りだけでも、ワーケーションだけでもない。島、まち、仕事、里山、食、人との時間が一つの旅としてつながります。" en="More than a festival trip or a workation: island life, town, work, satoyama, food, and people form one connected journey." /></p>
        </div>
        <div className="itinerary-grid shell">
          {itinerary.map((item) => (
            <article className={item.featured ? "itinerary-card featured" : "itinerary-card"} key={item.date}>
              <div className="date-block"><span>SEP</span><strong>{item.date}</strong><small>{item.day}</small></div>
              <div><h3><Bi {...item.title} /></h3><p><Bi {...item.text} /></p></div>
            </article>
          ))}
        </div>
        <p className="schedule-note shell"><Bi ja="※工程は仮です。地域の状況や天候により、日程・会場・内容が変更になる場合があります。" en="The itinerary is tentative and may change depending on weather and local conditions." /></p>
      </section>

      <section className="fam-value-section" aria-labelledby="fam-value-title">
        <div className="value-layout shell">
          <div>
            <p className="eyebrow">WHAT YOU TAKE HOME</p>
            <h2 id="fam-value-title"><Bi ja="見るだけでは、持ち帰れないもの。" en="Take home more than what you can see." /></h2>
          </div>
          <ul className="value-list">
            <li><span>01</span><Bi ja="祭りを支える人々との接点" en="Connections with the people behind the festival" /></li>
            <li><span>02</span><Bi ja="島、まち、里山、食を一続きで知る7日間" en="Seven days connecting island, town, satoyama, and food" /></li>
            <li><span>03</span><Bi ja="5名だから生まれる、顔の見える関係" en="A five-person cohort built for genuine relationships" /></li>
            <li><span>04</span><Bi ja="仕事や制作を続けられる余白" en="Space to keep working and creating" /></li>
          </ul>
        </div>
        <div className="who-strip shell">
          <p className="eyebrow">WHO WE ARE LOOKING FOR</p>
          <p><Bi ja="映像、写真、文章、デザイン、食、事業づくりなどの専門性を持ち、地域の文化とプライバシーを尊重しながら、能登の魅力を自分の視点で丁寧に届けたい方を歓迎します。" en="We welcome filmmakers, photographers, writers, designers, food professionals, entrepreneurs, and others who want to share Noto with care and respect for local life." /></p>
        </div>
      </section>

      <section className="free-section" id="free" aria-labelledby="free-title">
        <div className="free-visual shell">
          <img src="/noto/accommodation1.webp" alt="能登の古民家滞在イメージ" />
          <img src="/noto/coworking1.webp" alt="能登のコワーキング環境" />
          <span>LIVE / WORK / CREATE / CONNECT</span>
        </div>
        <div className="free-grid shell">
          <div>
            <p className="eyebrow">02 / FREE ACCOMMODATION</p>
            <h2 id="free-title"><Bi ja="能登に暮らし、\n次の関係をつくる。" en="Live in Noto.\nBuild what comes next." /></h2>
            <p className="lead-copy"><Bi ja="2026年8月から12月、能登の古民家を拠点に滞在する10名を募集します。仕事や創作を続けながら、地域の方と出会い、能登との長い関係を育てるプログラムです。" en="From August to December 2026, ten participants will live from a traditional house in Noto, continue their work or creative practice, and build lasting relationships with the community." /></p>
          </div>
          <div className="free-offer">
            <h3><Bi ja="提供するもの" en="What we provide" /></h3>
            <ul>
              <li><Bi ja="運営指定の古民家の1室" en="One room in an organizer-designated traditional house" /></li>
              <li><Bi ja="コワーキング環境" en="Coworking access" /></li>
              <li><Bi ja="地域コミュニティへの紹介" en="Introductions to the local community" /></li>
              <li><Bi ja="地域イベント・事業者・プロジェクトとの接点" en="Connections to local events, businesses, and projects" /></li>
            </ul>
          </div>
        </div>
        <div className="free-categories shell">
          <div><strong>CREATIVE</strong><span><Bi ja="デザイン、写真、映像、文章、アート" en="Design, photography, film, writing, art" /></span></div>
          <div><strong>FOOD</strong><span><Bi ja="料理、製菓、食文化、ガストロノミー" en="Cooking, pastry, food culture, gastronomy" /></span></div>
          <div><strong>BUSINESS</strong><span><Bi ja="起業、リモートワーク、スタートアップ" en="Entrepreneurship, remote work, startups" /></span></div>
          <div><strong>LOCAL</strong><span><Bi ja="一次産業、工芸、伝統文化、地域共創" en="Primary industries, craft, tradition, co-creation" /></span></div>
        </div>
      </section>

      <section className="faq-section shell" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="eyebrow">BEFORE YOU APPLY</p>
          <h2 id="faq-title"><Bi ja="よくある質問" en="Frequently asked questions" /></h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q.en}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><Bi {...item.q} /><b aria-hidden="true">＋</b></summary>
              <p><Bi {...item.a} /></p>
            </details>
          ))}
        </div>
      </section>

      <section className="requirements-section" id="requirements" aria-labelledby="requirements-title">
        <div className="section-heading shell">
          <p className="eyebrow light">APPLICATION DETAILS</p>
          <h2 id="requirements-title"><Bi ja="募集要項" en="Application details" /></h2>
        </div>
        <div className="requirements-grid shell">
          <article className="requirement-card fam-requirement">
            <p className="card-number">01 / FAM TOUR</p>
            <h3><Bi ja="お熊甲祭と能登を巡る7日間" en="Seven days with Noto and its festival" /></h3>
            <dl>
              <div><dt><Bi ja="日程" en="Dates" /></dt><dd>2026.09.16–22</dd></div>
              <div><dt><Bi ja="募集" en="Places" /></dt><dd><Bi ja="5名" en="5 participants" /></dd></div>
              <div><dt><Bi ja="拠点" en="Base" /></dt><dd><Bi ja="能登島・七尾・中島町" en="Notojima, Nanao, Nakajima" /></dd></div>
              <div><dt><Bi ja="宿泊" en="Stay" /></dt><dd><Bi ja="HANAMI 6泊／運営手配" en="6 nights at HANAMI / organizer-arranged" /></dd></div>
              <div><dt><Bi ja="提供" en="Included" /></dt><dd><Bi ja="宿泊6泊、指定アクティビティ、夕食・交流3回、コミュニティプログラム" en="Six nights, listed activities, three hosted dinners/gatherings, and community program" /></dd></div>
              <div><dt><Bi ja="自己負担" en="Self-pay" /></dt><dd><Bi ja="往復交通、朝食・昼食、任意の飲食・体験、保険・個人費用" en="Travel, breakfast, lunch, optional food/activities, insurance, and personal costs" /></dd></div>
            </dl>
            <a className="button button-gold full-button" href={applicationForm} target="_blank" rel="noreferrer">
              <Bi ja="FAM Tourに応募" en="Apply for the FAM Tour" /> <Arrow />
            </a>
          </article>

          <article className="requirement-card free-requirement">
            <p className="card-number">02 / FREE ACCOMMODATION</p>
            <h3><Bi ja="古民家から始める能登での暮らし" en="Begin your life in Noto from a traditional home" /></h3>
            <dl>
              <div><dt><Bi ja="期間" en="Period" /></dt><dd>2026.08–12</dd></div>
              <div><dt><Bi ja="募集" en="Places" /></dt><dd><Bi ja="10名" en="10 participants" /></dd></div>
              <div><dt><Bi ja="対象" en="Eligibility" /></dt><dd><Bi ja="応募時点で25歳以上" en="Age 25 or older when applying" /></dd></div>
              <div><dt><Bi ja="宿泊" en="Stay" /></dt><dd><Bi ja="運営指定の古民家1室" en="One room in an organizer-designated traditional house" /></dd></div>
              <div><dt><Bi ja="提供" en="Included" /></dt><dd><Bi ja="宿泊、コワーキング、地域紹介、交流・参画機会" en="Accommodation, coworking, local introductions, and opportunities to connect" /></dd></div>
              <div><dt><Bi ja="自己負担" en="Self-pay" /></dt><dd><Bi ja="交通、食費、生活費、保険・ビザ、有料体験、同伴者宿泊" en="Travel, food, living costs, insurance/visa, paid activities, and companion stay" /></dd></div>
            </dl>
            <a className="button button-dark full-button" href={applicationForm} target="_blank" rel="noreferrer">
              <Bi ja="フリーアコモに応募" en="Apply for Free Accommodation" /> <Arrow />
            </a>
          </article>
        </div>
        <div className="requirements-actions shell">
          <a className="text-link light-link" href={termsUrl} target="_blank" rel="noreferrer">
            <Bi ja="応募前に詳細規約を読む" en="Read the full terms before applying" /> <Arrow />
          </a>
          <p><Bi ja="応募フォームで希望するプログラムを選択してください。" en="Select your preferred program in the application form." /></p>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <a className="wordmark" href="#top"><span>NOMAD RESORT</span><strong>NOTO</strong></a>
          <p>The Japan guidebooks can’t show you.</p>
          <div className="footer-links">
            <a href={officialUrl} target="_blank" rel="noreferrer">Official <Arrow /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <p className="copyright">© 2026 NOMAD RESORT NOTO</p>
      </footer>
    </main>
  );
}
