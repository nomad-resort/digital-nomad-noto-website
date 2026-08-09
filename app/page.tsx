import { Fragment } from "react";
import { LanguageToggle } from "./LanguageToggle";

const applicationForm =
  "https://docs.google.com/forms/d/1I1u-Rj2LemqzpfA9U4yaZ7aWhX-qxBflv-BbSKhwcDc/viewform";
const termsUrl =
  "https://docs.google.com/document/d/15L_SeddyQqgLDfAUR0YoSNgm1MCK-0DCpEkQWWS0GFA/edit";
const instagramUrl = "https://www.instagram.com/nomadresort_noto/";
const officialUrl = "https://noto.nomadresort.jp/";
const festivalUrl = "https://okumakabuto.jp/";
const hanamiUrl = "https://www.hanaminotojima.com/";
const notojimaPhotoUrl = "https://www.notojima.org/time/1317.html";
const contactEmail = "matt@nomadresort.jp";

type Copy = { ja: string; en: string };

const itinerary: Array<{
  date: string;
  day: string;
  title: Copy;
  timeline: Array<{ time: Copy; event: Copy }>;
  featured?: boolean;
}> = [
  {
    date: "18",
    day: "FRI",
    title: { ja: "能登へ向かう旅", en: "The journey to Noto" },
    timeline: [
      { time: { ja: "昼頃", en: "Around noon" }, event: { ja: "金沢集合", en: "Meet in Kanazawa" } },
      { time: { ja: "午後", en: "Afternoon" }, event: { ja: "車で能登へドライブ・HANAMIチェックイン", en: "Drive to Noto and check in at HANAMI" } },
      { time: { ja: "夜", en: "Evening" }, event: { ja: "ウェルカムパーティー", en: "Welcome Party" } },
    ],
  },
  {
    date: "19",
    day: "SAT",
    title: { ja: "七尾で集合、祭りの前日へ", en: "Meet in Nanao, enter the festival eve" },
    timeline: [
      { time: { ja: "午前", en: "Morning" }, event: { ja: "金沢組は電車で七尾駅へ", en: "The Kanazawa group travels by train to Nanao Station" } },
      { time: { ja: "昼頃", en: "Around noon" }, event: { ja: "七尾駅で集合", en: "Meet at Nanao Station" } },
      { time: { ja: "午後", en: "Afternoon" }, event: { ja: "中島町で祭り前日の地域の時間に触れる", en: "Join festival-eve activities and meet the local community in Nakajima" } },
    ],
  },
  {
    date: "20",
    day: "SUN",
    title: { ja: "お熊甲祭", en: "Okuma Kabuto Festival" },
    timeline: [
      { time: { ja: "朝", en: "Morning" }, event: { ja: "中島町へ移動・祭礼と行列の始まり", en: "Travel to Nakajima as the processions begin" } },
      { time: { ja: "終日", en: "Daytime" }, event: { ja: "中島町でお熊甲祭に参加", en: "Festival experience in Nakajima" } },
      { time: { ja: "夜", en: "Evening" }, event: { ja: "能登島へ戻る", en: "Return to Notojima" } },
    ],
    featured: true,
  },
  {
    date: "21",
    day: "MON",
    title: { ja: "ゆっくりした朝と七尾ナイト", en: "A slow morning & Nanao night" },
    timeline: [
      { time: { ja: "午前", en: "Morning" }, event: { ja: "ゆっくりと島の朝を過ごす", en: "A slow island morning" } },
      { time: { ja: "日中", en: "Daytime" }, event: { ja: "仕事・制作の時間", en: "Work or creative time" } },
      { time: { ja: "午後", en: "Afternoon" }, event: { ja: "七尾市内・一本杉通りを巡る", en: "Explore central Nanao and Ipponsugi Street" } },
      { time: { ja: "夜", en: "Evening" }, event: { ja: "居酒屋と地元のスナックへ", en: "Izakaya dinner and a local Japanese snack bar" } },
    ],
  },
  {
    date: "22",
    day: "TUE",
    title: { ja: "自由な能登時間とBBQ", en: "Free time in Noto & BBQ" },
    timeline: [
      { time: { ja: "日中", en: "Daytime" }, event: { ja: "自由時間", en: "Free time" } },
      { time: { ja: "希望者", en: "Optional" }, event: { ja: "海のアクティビティツアー", en: "Ocean activity tour" } },
      { time: { ja: "夜", en: "Evening" }, event: { ja: "みんなでBBQ", en: "BBQ together" } },
    ],
  },
  {
    date: "23",
    day: "WED",
    title: { ja: "振り返りと出発", en: "Closing & departure" },
    timeline: [
      { time: { ja: "午前", en: "Morning" }, event: { ja: "振り返り・チェックアウト", en: "Closing reflection and check-out" } },
      { time: { ja: "日中", en: "Daytime" }, event: { ja: "移動・解散", en: "Departure" } },
    ],
  },
];

const faqs: Array<{ q: Copy; a: Copy }> = [
  {
    q: { ja: "FAM Tourの宿泊はどうなりますか？", en: "How is FAM Tour accommodation arranged?" },
    a: { ja: "9月18日から23日までの5泊を、運営側が能登島ゲストハウス葉波（HANAMI）にまとめて手配し、宿泊費も負担します。参加者による個別予約・宿泊費の支払いは不要です。", en: "The organizing team will arrange and cover all five nights, September 18–23, at Notojima Guesthouse HANAMI. Participants do not need to book or pay for the stay themselves." },
  },
  {
    q: { ja: "交通費の補助はありますか？", en: "Is travel subsidized?" },
    a: { ja: "指定する集合場所までの往復交通費と、滞在中の私的な移動費は参加者負担です。公式工程内で運営が手配する移動は運営が負担します。", en: "Travel to and from the designated meeting point, plus personal transportation during the stay, is at the participant’s expense. Transportation arranged by the organizer within the official itinerary is covered." },
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
  {
    q: { ja: "キャンセル時に費用はかかりますか？", en: "What is the cancellation policy?" },
    a: { ja: "参加確定前の辞退と、原則として開始15日前までのキャンセルには費用を請求しません。開始14日前以降、無断不参加、開始後の途中離脱では、宿泊・食事・体験・移動・清掃等のうち、運営が支払い済みで返金・転用できない実費のみを、内訳を提示したうえで請求する場合があります。", en: "There is no charge before participation is confirmed and, in principle, no charge for cancellation 15 or more days before the start date. From 14 days before, for no-shows, or for early departure, we may charge only documented, non-refundable direct costs already paid for accommodation, meals, activities, transport, cleaning, or related arrangements." },
  },
];

function Bi({ ja, en }: Copy) {
  const withBreaks = (text: string) =>
    text.split(/\\n|\n/).map((line, index) => (
      <Fragment key={`${line}-${index}`}>
        {index > 0 && <br />}
        {line}
      </Fragment>
    ));

  return (
    <>
      <span className="lang-ja">{withBreaks(ja)}</span>
      <span className="lang-en">{withBreaks(en)}</span>
    </>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href={officialUrl} aria-label="Back to Digital Nomad Noto">
          <span>NOMAD RESORT</span>
          <strong>NOTO</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href={officialUrl}><Bi ja="能登とは？" en="About Noto" /></a>
          <a href="#festival"><Bi ja="お熊甲祭" en="Festival" /></a>
          <a href="#notojima"><Bi ja="能登島" en="Notojima" /></a>
          <a href="#itinerary"><Bi ja="日程" en="Itinerary" /></a>
          <a href="#free"><Bi ja="フリーアコモ" en="Free stay" /></a>
        </nav>
        <div className="header-tools">
          <a className="header-cta" href={applicationForm} target="_blank" rel="noreferrer">
            <Bi ja="応募する" en="Apply now" /> <Arrow />
          </a>
          <LanguageToggle />
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/noto/okumakabuto-04.jpg" alt="お熊甲祭の深紅の枠旗" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">NOMAD RESORT NOTO 2026 / FAM TOUR</p>
          <h1 id="hero-title">
            <span className="lang-ja hero-title-ja hero-title-ja-desktop">お熊甲祭の熱と、<br />能登の暮らしの中へ。</span>
            <span className="lang-ja hero-title-ja hero-title-ja-mobile">お熊甲祭の熱と、<br />能登の暮らしの<br />中へ。</span>
            <span className="lang-en">Enter the festival.<br />Live the rhythm of Noto.</span>
          </h1>
          <p className="hero-lead">
            <Bi
              ja="祭りを支える人々の時間に触れ、能登島を拠点に暮らす6日間。"
              en="Six days inside a living festival, based on the island of Notojima."
            />
          </p>
          <div className="hero-facts" aria-label="Program facts">
            <span>SEP. 18–23</span>
            <span>NOTOJIMA / NANAO</span>
            <span><Bi ja="5名限定" en="5 PEOPLE" /></span>
            <span><Bi ja="応募締切 8月24日 12:00" en="APPLY BY AUG. 24 / 12:00 JST" /></span>
          </div>
          <div className="hero-actions">
            <a className="button button-gold" href={applicationForm} target="_blank" rel="noreferrer">
              <Bi ja="Nomad Resort Noto 2026に応募" en="Apply to Nomad Resort Noto 2026" /> <Arrow />
            </a>
          </div>
          <p className="hero-cta-note">
            <Bi ja="共通フォームでFAM Tour、フリーアコモ、または両方を選べます。" en="One form for the FAM Tour, Free Accommodation, or both." />
          </p>
          <a className="hero-about-link" href={officialUrl}>
            <Bi ja="能登とは？ 能登の文化と地域について知る" en="New to Noto? Explore the culture and region" /> <Arrow />
          </a>
        </div>
        <p className="hero-side-note">OKUMA KABUTO FESTIVAL / NAKAJIMA, NOTO</p>
      </section>

      <section className="selection-section" aria-labelledby="selection-title">
        <div className="selection-heading shell">
          <div>
            <p className="eyebrow light">APPLICATION / SELECTION</p>
            <h2 id="selection-title"><Bi ja="応募から参加決定まで" en="From application to selection" /></h2>
            <p className="selection-intro"><Bi ja="応募は8月24日12:00（日本時間）まで。応募受領後、対象の方へオンライン面談を順次ご案内します。" en="Applications close August 24 at 12:00 noon JST. Selected applicants will be invited to an online interview on a rolling basis." /></p>
          </div>
          <div className="selection-deadline" aria-label="Application deadline">
            <span><Bi ja="応募締切（日本時間）" en="APPLICATION DEADLINE / JST" /></span>
            <strong>AUG. 24</strong>
            <small>12:00 NOON</small>
          </div>
        </div>
        <div className="application-timeline shell" aria-label="Application and selection timeline">
          <div>
            <span>01</span>
            <strong><Bi ja="応募" en="Apply" /></strong>
            <p><Bi ja="8月6日〜24日 12:00（日本時間）" en="August 6–24 / until 12:00 noon JST" /></p>
          </div>
          <div>
            <span>02</span>
            <strong><Bi ja="オンライン面談" en="Online interview" /></strong>
            <p><Bi ja="8月8日〜26日／応募受領後に順次ご案内" en="August 8–26 / invitations sent on a rolling basis" /></p>
          </div>
          <div>
            <span>03</span>
            <strong><Bi ja="結果通知" en="Decision" /></strong>
            <p><Bi ja="面談後2日以内に順次通知／最終8月28日" en="Within two days of interview / all notices by August 28" /></p>
          </div>
        </div>
        <div className="selection-action shell">
          <p><Bi ja="共通フォームの最初で、FAM Tour、フリーアコモ、または両方を選択できます。" en="Choose the FAM Tour, Free Accommodation, or both at the start of the shared form." /></p>
          <a className="button button-gold" href={applicationForm} target="_blank" rel="noreferrer">
            <Bi ja="応募フォームへ" en="Go to application form" /> <Arrow />
          </a>
        </div>
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
                ja="このツアーでは9月18日から能登に入り、祭り当日だけでなく、祭りを迎える地域の時間に触れます。"
                en="The tour arrives in Noto on September 18, revealing not only the festival but the people and preparation behind it."
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
            <p className="eyebrow">SIX DAYS BASED ON THE ISLAND</p>
            <h2 id="notojima-title"><Bi ja="6日間の拠点は、能登島。" en="Your base for six days: Notojima." /></h2>
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
                ja="早朝の島を歩く時間、海を見ながら仕事や制作をする時間、能登の海や地域の食卓に触れる時間。アクティビティの合間にある島の日常も、このツアーの大切なプログラムです。"
                en="Morning walks, quiet hours for work and creation, ocean activities, and shared local tables: the island’s everyday rhythm between activities is an essential part of the journey."
              />
            </p>
          </div>
        </div>
        <div className="island-image shell">
          <img src="/noto/notojima-suso.jpg" alt="A quiet coastal village in Susomachi, Notojima / 能登島須曽町の静かな海辺の集落" />
          <span>
            NOTOJIMA / SUSOMACHI / NANAO BAY
            <a href={notojimaPhotoUrl} target="_blank" rel="noreferrer">PHOTO: NOTOJIMA TOURISM ASSOCIATION ↗</a>
          </span>
        </div>

        <article className="hanami-card shell">
          <div className="hanami-gallery">
            <img src="/noto/hanami-living.png" alt="HANAMI sea-view lounge / 能登島ゲストハウス葉波の海が見えるラウンジ" />
            <img src="/noto/hanami-room.jpg" alt="HANAMI sea-view tatami guest room / 能登島ゲストハウス葉波の海が見える畳の客室" />
            <span className="hanami-photo-credit">PHOTO: NOTOJIMA GUESTHOUSE HANAMI</span>
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
              <strong><Bi ja="5泊／運営手配・宿泊費負担" en="5 nights / arranged and covered by the organizer" /></strong>
              <span>SEP. 18–23, 2026</span>
            </div>
            <a className="text-link" href={hanamiUrl} target="_blank" rel="noreferrer">
              <Bi ja="HANAMI公式サイト" en="HANAMI official website" /> <Arrow />
            </a>
          </div>
        </article>
      </section>

      <section className="itinerary-section" id="itinerary" aria-labelledby="itinerary-title">
        <div className="section-heading shell">
          <p className="eyebrow light">SEPTEMBER 18–23, 2026</p>
          <h2 id="itinerary-title"><Bi ja="能登の魅力を詰め込んだ6日間。" en="Six days filled with the essence of Noto." /></h2>
          <p><Bi ja="祭りだけでも、ワーケーションだけでもない。島、まち、仕事、海、食、人との時間が一つの旅としてつながります。" en="More than a festival trip or a workation: island life, town, work, the sea, food, and people form one connected journey." /></p>
        </div>
        <div className="itinerary-grid shell">
          {itinerary.map((item) => (
            <article className={item.featured ? "itinerary-card featured" : "itinerary-card"} key={item.date}>
              <div className="date-block"><span>SEP</span><strong>{item.date}</strong><small>{item.day}</small></div>
              <div>
                <h3><Bi {...item.title} /></h3>
                <ul className="day-timeline">
                  {item.timeline.map((entry) => (
                    <li key={`${entry.time.en}-${entry.event.en}`}>
                      <span className="timeline-time"><Bi {...entry.time} /></span>
                      <span><Bi {...entry.event} /></span>
                    </li>
                  ))}
                </ul>
              </div>
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
            <li><span>02</span><Bi ja="島、まち、海、食を一続きで知る6日間" en="Six days connecting island, town, sea, and food" /></li>
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
        {/* Temporary reference photos. Replace when the final house and coworking photos are supplied. */}
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
            <h3><Bi ja="お熊甲祭と能登を巡る6日間" en="Six days with Noto and its festival" /></h3>
            <dl>
              <div><dt><Bi ja="日程" en="Dates" /></dt><dd>2026.09.18–23</dd></div>
              <div><dt><Bi ja="募集" en="Places" /></dt><dd><Bi ja="5名" en="5 participants" /></dd></div>
              <div><dt><Bi ja="対象" en="Eligibility" /></dt><dd><Bi ja="応募時点で25歳以上" en="Age 25 or older when applying" /></dd></div>
              <div><dt><Bi ja="拠点" en="Base" /></dt><dd><Bi ja="能登島・七尾・中島町" en="Notojima, Nanao, Nakajima" /></dd></div>
              <div><dt><Bi ja="宿泊" en="Stay" /></dt><dd><Bi ja="HANAMI 5泊／運営手配・宿泊費負担" en="5 nights at HANAMI / arranged and covered by the organizer" /></dd></div>
              <div><dt><Bi ja="提供" en="Included" /></dt><dd><Bi ja="宿泊5泊、公式工程内の指定移動、指定アクティビティ、夕食・交流3回、コミュニティプログラム" en="Five nights, designated transportation within the official itinerary, listed activities, three hosted dinners/gatherings, and community program" /></dd></div>
              <div><dt><Bi ja="発信" en="Outputs" /></dt><dd><Bi ja="発信内容・納品物・公開期限は参加確定前に個別合意" en="Content, deliverables, and publication timing agreed individually before confirmation" /></dd></div>
              <div><dt><Bi ja="自己負担" en="Self-pay" /></dt><dd><Bi ja="指定する集合・解散場所までの往復交通、朝食・昼食、任意の飲食・体験、保険・個人費用" en="Travel to and from the designated meeting and departure points, breakfast, lunch, optional food/activities, insurance, and personal costs" /></dd></div>
            </dl>
          </article>

          <article className="requirement-card free-requirement">
            <p className="card-number">02 / FREE ACCOMMODATION</p>
            <h3><Bi ja="古民家から始める能登での暮らし" en="Begin your life in Noto from a traditional home" /></h3>
            <dl>
              <div><dt><Bi ja="期間" en="Period" /></dt><dd>2026.08–12</dd></div>
              <div><dt><Bi ja="募集" en="Places" /></dt><dd><Bi ja="10名" en="10 participants" /></dd></div>
              <div><dt><Bi ja="対象" en="Eligibility" /></dt><dd><Bi ja="応募時点で25歳以上" en="Age 25 or older when applying" /></dd></div>
              <div><dt><Bi ja="滞在期間" en="Length" /></dt><dd><Bi ja="連続14泊以上30泊以下" en="14–30 consecutive nights" /></dd></div>
              <div><dt><Bi ja="宿泊" en="Stay" /></dt><dd><Bi ja="七尾市内の古民家・専用和室1室・日本式布団" en="A private tatami room with futon in a traditional house in Nanao" /></dd></div>
              <div><dt><Bi ja="共用設備" en="Shared" /></dt><dd><Bi ja="バスまたはシャワー、トイレ、キッチン" en="Bath or shower, toilet, and kitchen" /></dd></div>
              <div><dt><Bi ja="提供" en="Included" /></dt><dd><Bi ja="宿泊、コワーキング、地域紹介、交流・参画機会" en="Accommodation, coworking, local introductions, and opportunities to connect" /></dd></div>
              <div><dt><Bi ja="自己負担" en="Self-pay" /></dt><dd><Bi ja="交通、食費、生活費、保険・ビザ、有料体験、同伴者宿泊" en="Travel, food, living costs, insurance/visa, paid activities, and companion stay" /></dd></div>
            </dl>
          </article>
        </div>
        <div className="application-notes shell">
          <div>
            <p className="eyebrow light">CANCELLATION NOTE</p>
            <p><Bi ja="参加確定前の辞退と、原則として開始15日前までのキャンセルは請求なし。開始14日前以降・無断不参加・途中離脱では、返金・転用できない実費のみを内訳付きで請求する場合があります。詳細は応募規約をご確認ください。" en="No charge before confirmation and, in principle, no charge 15 or more days before the start. From 14 days before, for no-shows, or for early departure, only documented non-refundable direct costs may be charged. Please read the full terms before applying." /></p>
          </div>
          <div>
            <p className="eyebrow light">CONTACT</p>
            <a href={`mailto:${contactEmail}`}>{contactEmail} <Arrow /></a>
            <p><Bi ja="同伴者・家族の受入れと追加宿泊費は事前相談・個別見積りです。" en="Companions and families require advance approval; additional stay fees are quoted individually." /></p>
          </div>
        </div>
        <div className="requirements-actions shell">
          <a className="button button-gold shared-apply-button" href={applicationForm} target="_blank" rel="noreferrer">
            <Bi ja="今すぐ応募 — 1つまたは両方を選択" en="Apply now — choose one or both programs" /> <Arrow />
          </a>
          <div className="requirements-meta">
            <a className="text-link light-link" href={termsUrl} target="_blank" rel="noreferrer">
              <Bi ja="応募前に詳細規約を読む" en="Read the full terms before applying" /> <Arrow />
            </a>
            <p><Bi ja="共通フォームの最初に、FAM Tour、フリーアコモ、または両方を選択します。" en="Choose the FAM Tour, Free Accommodation, or both at the start of the shared form." /></p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <a className="wordmark" href="#top"><span>NOMAD RESORT</span><strong>NOTO</strong></a>
          <p>The Japan guidebooks can’t show you.</p>
          <div className="footer-links">
            <a href={officialUrl}><Bi ja="能登とは？" en="About Noto" /> <Arrow /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <p className="copyright">© 2026 NOMAD RESORT NOTO</p>
      </footer>
    </main>
  );
}
