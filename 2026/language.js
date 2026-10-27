(() => {
  const translations = [
    ['DESIGN PREVIEW · NOT PUBLISHED','デザインプレビュー · 未公開'],
    ['The experience','体験'],['Your stay','滞在環境'],['Give something back','地域との関わり'],['Explore the program ↗','募集概要 ↗'],
    ['WINTER 2026 · NANAO, NOTO, JAPAN','2026年 冬 · 石川県 能登・七尾'],
    ['Retreat into winter.','冬の能登に、こもって。'],['Reconnect with','暮らしに触れて、'],['your creativity.','創造性を育てる。'],
    ['A traditional home. A different rhythm.','古民家で過ごす、いつもと違う日常。'],['Two weeks of work, local life, and fresh inspiration in Noto.','仕事と能登の暮らしを重ね、新しいインスピレーションに出会う2週間。'],
    ['3 PLACES LEFT','残り3名募集'],['PRIVATE ROOM · FREE STAY','個室宿泊費無料'],['DEC 8–22*','12月8日〜22日*'],['Find your place in Noto','能登での滞在に応募する'],
    ['A selected-participant program, with a meaningful local contribution.','選考制のプログラムです。滞在中は地域につながる活動に取り組みます。'],['*Proposed dates; individual stays arranged together.','*基本日程です。滞在日程は個別に相談して決定します。'],['LIVE / WORK / CREATE / CONNECT','暮らす / 働く / つくる / つながる'],
    ['A CHANGE OF PLACE. A NEW WAY OF SEEING.','場所が変わる。ものの見方が変わる。'],['Less routine.','いつもの日常を離れて、'],['More room for possibility.','新しい発想の余白を。'],
    ['Step away from the familiar. Follow the light through shoji screens, share a table, and notice the beauty in everyday things. Bring your work or a creative practice—and leave space for what Noto might inspire.','障子越しの光、誰かと囲む食卓、日用品に宿る美しさ。いつもと違う暮らしの中に、仕事や制作のヒントがあるかもしれません。自分のペースで取り組みながら、能登での出会いを楽しんでください。'],
    ['01 / FIND YOUR INSPIRATION','01 / 感性をひらく体験'],['Let everyday life','暮らしそのものを、'],['be your inspiration.','インスピレーションに。'],['THE BEAUTY OF EVERYDAY THINGS','日々の道具に宿る美しさ'],['A closer look at Japanese culture.','日本文化を、暮らしの距離で。'],
    ['Wood, paper, woven straw. Discover the quiet beauty of useful things and the care that keeps them alive—a way of seeing that resonates with','木、紙、い草。使うためにつくられたものの美しさと、手入れしながら受け継ぐ暮らしに触れる。そこには、'],['mingei','民藝'],[' , Japan’s folk-craft tradition.','のまなざしにも通じる発見があります。'],[', Japan’s folk-craft tradition.','のまなざしにも通じる発見があります。'],
    ['NATURE, IN ALL ITS COMPLEXITY','自然の厳しさも、恵みも'],['Winter has something to teach us.','冬の能登から、学ぶこと。'],['Noto’s winter is cold, and nature can be demanding. Explore its seasonal seafood and the everyday wisdom of people living with both nature’s gifts and its challenges.','寒さや自然の厳しさもある、能登の冬。旬の海の幸を味わいながら、自然の脅威と恵みの両方と向き合ってきた人々の暮らしの知恵に触れます。'],
    ['CONVERSATIONS THAT STAY WITH YOU','心に残る、食卓と会話'],['Meet people. Exchange perspectives.','人と出会い、視点を交わす。'],['Get to know fellow residents and people in the community. A shared meal or an unexpected conversation can become the beginning of your next idea.','滞在メンバーや地域の人と知り合い、一緒に食卓を囲む。何気ない会話や思いがけない出会いが、次のアイデアのきっかけになるかもしれません。'],['Coastal and community photographs show previous moments in Noto, not a fixed winter itinerary.','海辺や交流の写真は過去の能登での様子です。冬の決まった行程を示すものではありません。'],
    ['SPACE TO SLOW DOWN & CREATE','自分のペースで、仕事と制作に向き合う'],['02 / YOUR PLACE TO FOCUS','02 / 集中できる滞在環境'],['Old wood.','古民家で育む、'],['New ideas.','新しいアイデア。'],['A private room with Wi-Fi, and 24-hour access to a traditional-house coworking space. Settle into your own rhythm: focused work, time to explore, and room to connect.','Wi-Fi付きの個室と、24時間アクセスできる古民家コワーキング。集中する時間も、地域を歩く時間も、人とつながる時間も、自分のペースで過ごせます。'],
    ['A private room with Wi-Fi','Wi-Fi付きの個室'],['24-hour coworking access','24時間利用できるコワーキング'],['Shared kitchen, bathroom & toilet','共用のキッチン・浴室・トイレ'],['Introductions to the local community','地域の人とのつながりをサポート'],['Interior photographs show the traditional setting. Your room and arrangements will be confirmed individually.','写真は古民家の空間をご紹介するものです。お部屋や滞在条件は個別に確認します。'],
    ['03 / CARE FOR A PLACE. BECOME PART OF IT.','03 / 手をかけて、地域とつながる'],['Not just a place to stay.','ただ泊まるだけでなく、'],['A place to contribute.','能登と関わる滞在に。'],['A home shaped by generations of everyday care.','日々の手入れで、受け継がれてきた住まい。'],['ABOUT 4 HOURS','約4時間'],['Care for a traditional home.','古民家を、一緒に手入れする。'],['Learn about Japanese living spaces through simple, hands-on maintenance—not construction work.','大がかりな改修ではなく、身近なメンテナンスを通じて、日本の住まいと暮らしに触れる時間です。'],
    ['Replace shoji paper','障子の張り替え'],['Refresh the paper screens that soften the light.','やわらかな光を通す障子を、きれいに張り替える。'],['Wipe down tatami','畳の拭き上げ'],['Care for the woven surfaces beneath your feet.','足元の畳を拭き上げ、気持ちのよい空間に整える。'],['Dust with a hataki','ハタキ掃除'],['Discover a traditional way of keeping a home clean.','昔ながらの道具を使って、住まいのほこりを払う。'],
    ['10–30 HOURS DURING YOUR STAY','滞在中に計10〜30時間程度'],['Bring your skills.','あなたの得意を、'],['Build a small connection.','能登につなげる。'],['Photography, film, design, writing, food, or a new idea. Work with local people on one concrete contribution that fits your experience and interests.','写真、映像、デザイン、文章、料理、企画など。自分の経験や関心を生かし、地域の人と一緒に具体的な貢献につながるプロジェクトに取り組みます。'],['You do not need a finished proposal. We’ll agree on the scope, format and timing before confirming your participation, including how home-maintenance time fits into your commitment. Share a short reflection at the end.','完成した企画がなくても大丈夫です。活動の内容・形式・時期と、メンテナンス時間の扱いは、参加確定前に相談して合意します。滞在の最後には、短い振り返りをお願いします。'],['Respect local privacy, cultural context and consent in all creative work.','活動にあたっては、地域のプライバシー、文化的背景、関係者の同意を尊重してください。'],
    ['COME WITH CURIOSITY','好奇心を、持ってきてください'],['For people ready','いつもと違う視点に'],['to see things differently.','出会いたいあなたへ。'],['You don’t have to call yourself an artist.','アーティストでなくても大丈夫。'],['Just bring curiosity, care, and something to share.','好奇心と、地域への思いやり、あなたらしい得意があれば。'],['You want fresh inspiration for your work or creative practice.','仕事や制作に、新しいインスピレーションがほしい。'],['You’re curious about Japanese culture, crafts and traditional homes.','日本の文化や手仕事、古民家の暮らしに触れたい。'],['You want to experience winter life in Hokuriku and seasonal seafood.','北陸の冬の暮らしと、旬の海の幸を楽しみたい。'],['You’d like focused work time—and meaningful local connections.','仕事に集中しながら、地域の人ともつながりたい。'],
    ['THE PEOPLE MAKE THE PLACE','人との出会いが、場所を特別にする'],['Arrive with an open mind.','心をひらいて、'],['Make room for connection.','出会いの余白を。'],['A moment from a previous stay. Experiences vary with the season and local availability.','過去の滞在でのひとこま。体験は季節や地域の状況によって異なります。'],
    ['04 / WINTER FREE ACCOMMODATION PROGRAM','04 / 冬のフリーアコモデーション'],['Your next chapter','次のひらめきは、'],['starts in Noto.','能登の暮らしから。'],['Three places remain.','残り3名を募集しています。'],['Tell us what inspires you, what you can share,','興味のあること、あなたの得意、'],['and when you’d like to come.','希望の滞在日程を教えてください。'],['Apply for the free stay','無料宿泊プログラムに応募 ↗'],['Questions? Let’s talk about your stay ↗','滞在について相談する ↗'],
    ['PLACES','募集人数'],['3 remaining · selection required','残り3名・選考あり'],['PROPOSED DATES','基本日程'],['December 8–22, 2026','2026年12月8日〜22日'],['Dates can be discussed individually.','日程は個別に相談可能です。'],['LENGTH OF STAY','滞在期間'],['At least 2 weeks, less than 1 month','2週間以上・1ヶ月未満'],['ELIGIBILITY','応募条件'],['Age 25 or older','25歳以上'],['INCLUDED','含まれるもの'],['Private accommodation, Wi-Fi,','個室宿泊、Wi-Fi、'],['coworking & local introductions','コワーキング・地域との交流サポート'],['SELF-FUNDED','自己負担'],['Travel, food, personal expenses,','交通費、食費、個人的な費用、'],['insurance, visa & optional paid activities','保険、ビザ、有料の任意体験'],
    ['BEFORE YOU APPLY','応募前にご確認ください'],['A few things to know.','よくあるご質問'],['How are participants selected?','参加者はどのように選考されますか？'],['Complete the application with your preferred dates, experience and an idea for contributing locally. Interviews and decisions are arranged individually. Your contribution and stay arrangements will be agreed before confirmation.','応募フォームに希望日程、経験、地域で取り組みたいことを記入してください。面談と選考結果のご連絡は個別に行います。活動内容と滞在条件は、参加確定前に合意します。'],['What should I expect from winter in Noto?','冬の能登では、どんな滞在になりますか？'],['Cold weather, a quieter pace, and a chance to get to know everyday life in Hokuriku. Bring warm clothing and discuss transport and work needs with us before booking. Outdoor activities depend on weather and local conditions.','寒さのある季節に、ゆったりと北陸の日常に触れる滞在です。防寒着を用意し、交通手段や仕事に必要な環境は予約前にご相談ください。屋外の体験は、天候や現地の状況によって変わります。'],['Are meals and activities included?','食事やアクティビティは含まれますか？'],['No. The offer covers accommodation and coworking, not an all-inclusive tour. Food, travel and optional paid experiences are your responsibility. Photos are an introduction to Noto, not a promise of specific activities.','含まれません。宿泊とコワーキングを提供するプログラムで、すべて込みのツアーではありません。食費、交通費、任意の有料体験は自己負担です。写真は能登の紹介であり、特定の体験を保証するものではありません。'],['Can I bring a partner or family?','パートナーや家族と一緒に参加できますか？'],['Companions and families require advance approval. Additional accommodation costs are quoted individually.','同行者やご家族の参加には事前の承認が必要です。追加の宿泊費は個別にご案内します。'],['Where can I find the full terms?','詳しい参加条件はどこで確認できますか？'],['Please review the','応募前に、キャンセル条件を含む'],['full terms and important information ↗','参加規約・重要事項 ↗'],[', including cancellation arrangements, before applying. Contact us if anything is unclear.','をご確認ください。不明な点はお気軽にお問い合わせください。'],['The Japan guidebooks can’t show you.','ガイドブックにはない、日本に出会う。'],['About Noto ↗','能登について ↗']
  ];
  const dictionary = new Map(translations);
  dictionary.set('Apply for the free stay', '無料宿泊プログラムに応募');
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style')) continue;
    const original = node.textContent;
    if (dictionary.has(original.trim())) nodes.push({node, original, ja: dictionary.get(original.trim())});
  }
  const community = document.querySelector('img[src="assets/community-new.png"]');
  community.src = 'assets/community-new.png';
  community.alt = 'Participants smiling around a shared dinner table in Noto';
  const altJapanese = ['古民家でノートパソコンを使って作業する様子','障子を通して畳に差し込むやわらかな光','松の木越しに見える能登の海','能登で食卓を囲み、笑顔を交わす参加者たち','梁と障子、囲炉裏のある畳の部屋','囲炉裏を囲む畳と座布団','能登の海辺で笑顔を見せる2人'];
  altJapanese[4] = '古民家にデスクと椅子を備えたNoras Officeのコワーキング空間';
  altJapanese[6] = '能登の夜に集まった参加者と地域の仲間たち';
  const images = [...document.images].map((el,i) => ({el,en:el.alt,ja:altJapanese[i]}));
  const switcher = document.createElement('div');
  switcher.className = 'language-switch';
  switcher.setAttribute('role','group');
  switcher.setAttribute('aria-label','Language / 言語');
  switcher.innerHTML = '<button type="button" lang="en" data-language="en">EN</button><button type="button" lang="ja" data-language="ja">日本語</button>';
  document.querySelector('header').append(switcher);
  const description = document.querySelector('meta[name="description"]');
  const englishDescription = description.content;
  function setLanguage(language) {
    const ja = language === 'ja';
    document.documentElement.lang = language;
    nodes.forEach(({node,original,ja:translated}) => {node.textContent = ja ? translated : original;});
    images.forEach(({el,en,ja:translated}) => {el.alt = ja ? translated : en;});
    document.title = ja ? '冬の能登｜無料宿泊プログラム' : 'Winter in Noto — Free Accommodation';
    description.content = ja ? '冬の能登の暮らしに触れて、創造性を育む。古民家コワーキングと個室宿泊費無料の滞在プログラム、残り3名募集。' : englishDescription;
    document.querySelector('nav').setAttribute('aria-label',ja ? 'メインナビゲーション' : 'Main navigation');
    switcher.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language === language)));
    try {localStorage.setItem('noto-winter-language',language);} catch {}
  }
  switcher.addEventListener('click',event => {
    const button = event.target.closest('button[data-language]');
    if(button) setLanguage(button.dataset.language);
  });
  let saved;
  try {saved = localStorage.getItem('noto-winter-language');} catch {}
  setLanguage(saved === 'ja' ? 'ja' : 'en');
})();
