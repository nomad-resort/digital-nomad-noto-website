const freeAccommodationForm =
  "https://docs.google.com/forms/d/1I1u-Rj2LemqzpfA9U4yaZ7aWhX-qxBflv-BbSKhwcDc/viewform";
const termsUrl =
  "https://docs.google.com/document/d/15L_SeddyQqgLDfAUR0YoSNgm1MCK-0DCpEkQWWS0GFA/edit";
const instagramUrl = "https://www.instagram.com/nomadresort_noto/";
const officialUrl = "https://noto.nomadresort.jp/ja/";

const famActivities = [
  "能登の祭りへの参加",
  "稲刈り体験",
  "七尾まち歩き",
  "コワーキング体験",
  "島でのチルタイム",
  "ローカルクッキングナイト",
  "地域交流イベント",
];

const freeCategories = [
  ["Creative", "デザイナー、フォトグラファー、映像クリエイター、ライター、アーティスト"],
  ["Food", "シェフ、料理人、パティシエ、食とガストロノミーに関心がある方"],
  ["Business", "起業家、リモートワーカー、スタートアップ関係者、コミュニティビルダー"],
  ["Local", "一次産業、工芸、伝統文化に関心があり、地域と共創したい方"],
];

const faqs = [
  {
    q: "交通費の補助はありますか？",
    a: "ありません。能登までの往復交通費と、滞在中の私的な移動費は参加者の負担です。FAM Tour、Free Accommodation Programのどちらも同様です。",
  },
  {
    q: "カップルや家族でも参加できますか？",
    a: "パートナーとの滞在は、施設の空きと定員に応じて相談できます。ただし無料対象は選考された本人のみで、同伴者には宿泊費がかかります。子どもを含む家族は個別にご相談ください。",
  },
  {
    q: "食事やビーガン対応について教えてください。",
    a: "Free Accommodation Programの日常の食事は原則自己手配です。交流の食事会などでは、事前申告に基づいて可能な範囲で対応しますが、地域や調理環境により完全対応を保証できない場合があります。FAM Tourは夕食3回を提供します。",
  },
  {
    q: "SNSのフォロワー数は選考に影響しますか？",
    a: "フォロワー数だけでは選びません。地域への敬意、専門性、滞在中に実行したいこと、そして滞在後も能登との関係を続ける意思を重視します。",
  },
  {
    q: "キャンセルはできますか？",
    a: "日程変更やキャンセルが必要になった場合は、分かった時点ですぐにご連絡ください。Free Accommodation Programでは、チェックイン13日前以降に運営が負担済みの返金不可実費をお願いする場合があります。詳細は応募前に規約をご確認ください。",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nomad Resort Noto トップへ">
          <span>NOMAD RESORT</span>
          <strong>NOTO</strong>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#programs">Programs</a>
          <a href="#why-noto">Why Noto</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#programs">
          募集を見る <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/noto/hero-fire.avif" alt="夜の能登で囲む焚き火" />
        <div className="hero-shade" />
        <img className="hero-map" src="/noto/hero-map.svg" alt="" />
        <div className="hero-collage" aria-hidden="true">
          <img className="collage-one" src="/noto/hero1.webp" alt="" />
          <img className="collage-two" src="/noto/hero2.webp" alt="" />
          <img className="collage-three" src="/noto/hero4.webp" alt="" />
          <img className="collage-four" src="/noto/hero7.webp" alt="" />
          <img className="collage-five" src="/noto/hero10.webp" alt="" />
        </div>
        <div className="hero-content shell">
          <p className="eyebrow light">NOMAD RESORT NOTO 2026</p>
          <h1 id="hero-title">
            能登を、<br />観るのではなく、<br />生きる。
          </h1>
          <p className="hero-lead">
            祭りに入り、土地と働き、人と食卓を囲む。<br />
            ふたつの滞在プログラムで、能登を第二のふるさとへ。
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#fam">
              FAM Tourを見る <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#free-accommodation">
              Free Accommodationを見る <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="scroll-mark">SCROLL TO DISCOVER</p>
      </section>

      <section className="manifesto shell" id="why-noto">
        <div>
          <p className="eyebrow">THE LAST UNTOUCHED JAPAN</p>
          <h2>ガイドブックでは、<br />たどり着けない能登へ。</h2>
        </div>
        <div className="manifesto-copy">
          <p>
            海と里山、食と工芸、祭りと日々の仕事。能登の魅力は、景色だけではありません。
            人の暮らしの中に入り、同じ時間を過ごすことで、はじめて見えてくるものがあります。
          </p>
          <p>
            私たちが探しているのは、旅行者ではなく、地域の未来を一緒につくる仲間です。
          </p>
        </div>
      </section>

      <section className="programs" id="programs" aria-labelledby="programs-title">
        <div className="section-head shell">
          <p className="eyebrow">TWO WAYS TO LIVE IN NOTO</p>
          <h2 id="programs-title">あなたの能登との関わり方を選ぶ。</h2>
        </div>
        <div className="program-grid shell">
          <a className="program-card fam-card" href="#fam">
            <span className="card-number">01</span>
            <div>
              <p className="card-kicker">6 NIGHTS / 5 PARTICIPANTS</p>
              <h3>FAM Tour</h3>
              <p>地域の一員として祭りに参加し、自分の視点で能登を世界へ届ける7日間。</p>
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
              <p>古民家を拠点に仕事や創作を続けながら、地域と新しい価値をつくる長期滞在。</p>
            </div>
            <div className="card-meta">
              <span>2026.08</span>
              <span>—</span>
              <span>12</span>
              <Arrow />
            </div>
          </a>
        </div>
      </section>

      <section className="fam-section" id="fam" aria-labelledby="fam-title">
        <div className="fam-visual">
          <img src="/noto/culture5.avif" alt="能登の祭りと地域の人々" />
          <div className="fam-date-stamp">
            <span>SEP.</span>
            <strong>16—22</strong>
            <small>2026 / 6 NIGHTS</small>
          </div>
        </div>
        <div className="fam-content shell">
          <div className="program-heading">
            <p className="eyebrow light">01 / FAM TOUR</p>
            <h2 id="fam-title">祭りを、観るのではなく、<br />生きる。</h2>
            <p className="program-intro">
              数百年受け継がれてきた祭りの熱気、人とのつながり、食文化、自然、暮らし。
              観光では体験できない能登の日常を、地域の人と共に過ごし、あなた自身の視点で発信してください。
            </p>
          </div>

          <div className="fact-row">
            <div><span>DATES</span><strong>2026.09.16–22</strong></div>
            <div><span>PLACE</span><strong>能登島・七尾</strong></div>
            <div><span>PEOPLE</span><strong>5名限定</strong></div>
          </div>

          <div className="fam-details detail-grid">
            <div>
              <h3>Program</h3>
              <ul className="line-list">
                {famActivities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3>Included</h3>
              <ul className="check-list">
                <li>能登島での宿泊 6泊</li>
                <li>地域アクティビティ</li>
                <li>夕食 3回</li>
                <li>コミュニティプログラム</li>
              </ul>
              <p className="small-note">
                ※朝食・昼食・一部自由時間の飲食、能登までの交通費は自己負担です。
              </p>
            </div>
          </div>

          <div className="who-block">
            <p className="eyebrow light">WHO WE ARE LOOKING FOR</p>
            <p className="who-lead">フォロワー数ではありません。<br />「また能登へ帰ってきたい」と思える人です。</p>
            <p>インフルエンサー、映像クリエイター、フォトグラファー、デザイナー、ライター、起業家、地域文化を発信したい方。</p>
          </div>

          <a className="button button-gold" href={instagramUrl} target="_blank" rel="noreferrer">
            FAM Tourの最新募集情報 <Arrow />
          </a>
        </div>
      </section>

      <section className="free-section" id="free-accommodation" aria-labelledby="free-title">
        <div className="free-photo-grid shell">
          <img className="free-photo-main" src="/noto/accommodation1.webp" alt="能登で滞在する古民家の室内" />
          <img className="free-photo-small" src="/noto/coworking1.webp" alt="能登のコワーキング環境" />
          <p className="photo-caption">LIVE / WORK / CREATE / CONNECT</p>
        </div>

        <div className="free-content shell">
          <div className="program-heading dark-text">
            <p className="eyebrow">02 / FREE ACCOMMODATION</p>
            <h2 id="free-title">暮らすように旅をする。<br />能登の未来を、一緒につくる。</h2>
            <p className="program-intro">
              古民家を拠点に、数週間から数か月。ただ宿泊するだけではなく、地域の人と出会い、食卓を囲み、一次産業や伝統文化に触れ、自分の仕事や創作を続けながら生活する共創プログラムです。
            </p>
          </div>

          <div className="fact-row light-row">
            <div><span>PERIOD</span><strong>2026.08–12</strong></div>
            <div><span>STAY</span><strong>数週間〜数か月</strong></div>
            <div><span>PEOPLE</span><strong>10名募集</strong></div>
          </div>

          <div className="included-panel">
            <div>
              <p className="eyebrow">WHAT WE PROVIDE</p>
              <h3>能登で働き、暮らし、<br />つながるための入口。</h3>
            </div>
            <ul className="number-list">
              <li><span>01</span>運営指定古民家での宿泊</li>
              <li><span>02</span>コワーキング環境</li>
              <li><span>03</span>地域コミュニティへの紹介</li>
              <li><span>04</span>地域イベントへの参加機会</li>
              <li><span>05</span>地元事業者との交流</li>
              <li><span>06</span>プロジェクトへの参画機会</li>
            </ul>
          </div>

          <div className="category-grid">
            {freeCategories.map(([title, text]) => (
              <article key={title}>
                <span>{title.slice(0, 1)}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="conditions">
            <div>
              <h3>Free means</h3>
              <p>無料対象は、選考された本人1名の、運営が承認した期間中の宿泊です。</p>
            </div>
            <div>
              <h3>Not included</h3>
              <p>交通費、食費、日用品、保険、ビザ関連費用、一部の有料体験、同伴者の宿泊費は含まれません。</p>
            </div>
            <div>
              <h3>Companions</h3>
              <p>パートナーとの滞在は相談可能です。施設の定員確認と、同伴者宿泊費が必要です。</p>
            </div>
          </div>

          <div className="application-box">
            <div>
              <p className="eyebrow">APPLICATION</p>
              <h3>旅行者ではなく、<br />地域の未来をつくる仲間へ。</h3>
              <p>応募時点で25歳以上の方が対象です。応募前に詳細規約をご確認ください。</p>
            </div>
            <div className="application-actions">
              <a className="button button-dark" href={freeAccommodationForm} target="_blank" rel="noreferrer">
                応募フォームへ <Arrow />
              </a>
              <a className="text-link" href={termsUrl} target="_blank" rel="noreferrer">
                詳細規約を読む <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="noto-story">
        <div className="story-grid">
          <img src="/noto/culture1.avif" alt="里山里海に根付く能登の暮らし" />
          <div className="story-copy">
            <p className="eyebrow light">WHY NOTO, WHY NOW</p>
            <blockquote>自然と人が一体となって生きる文化。<br />それが能登。</blockquote>
            <p>
              海があります。里山があります。工芸があります。そして、人がいます。
              ここで生まれた出会いが再会につながり、新しい仕事や作品、プロジェクトへ育っていく。
              そんな循環を、私たちは能登からつくります。
            </p>
            <a className="text-link light-link" href={officialUrl} target="_blank" rel="noreferrer">
              Nomad Resort Notoをもっと知る <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="faq shell" id="faq" aria-labelledby="faq-title">
        <div className="faq-head">
          <p className="eyebrow">BEFORE YOU APPLY</p>
          <h2 id="faq-title">よくある質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<b aria-hidden="true">＋</b></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <img src="/noto/join-team.avif" alt="能登でつながる人々" />
        <div className="final-overlay" />
        <div className="final-content shell">
          <p className="eyebrow light">YOUR SECOND HOMETOWN AWAITS</p>
          <h2>次に能登で会うのは、<br />あなたかもしれない。</h2>
          <div className="hero-actions">
            <a className="button button-gold" href={freeAccommodationForm} target="_blank" rel="noreferrer">
              Free Accommodationに応募 <Arrow />
            </a>
            <a className="button button-ghost" href={instagramUrl} target="_blank" rel="noreferrer">
              Instagramをフォロー <Arrow />
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
        FREE ACCOMMODATIONに応募 <Arrow />
      </a>
    </main>
  );
}
