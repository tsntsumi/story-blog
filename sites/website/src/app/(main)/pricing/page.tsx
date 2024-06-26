import { Metadata } from "next"
import Header from "@/components/main/Assets/Header"
import menu from "@/components/main/Assets/Menu"
import Link from "next/link"
import Go from "@/components/Assets/link"

export const metadata: Metadata = {
  title: "サービスと料金 | Alizza Ideal",
  description: `\
わたしたちアリザ・アイデアルが、ご提供するサービス・製品とそれらの料金をご説明します。`
}

export default function Page() {
  return (
    <section
      id="prising"
      className="pt-0 m-0 mt-14 md:w-md max-md min-md border-t-2 border-ai-gold mx-auto"
    >
      <div className="m-4 mx-8">
        <h1>わたしたち Alizza Ideal が提供するサービスと製品です</h1>
        <p>お問い合わせは、メールでどうぞ</p>
        <p>
          <Link
            href="mailto:kikuo@alizza-ideal.com"
            className="underline text-blue-500"
          >
            kikuo@alizza-ideal.com
          </Link>
        </p>
        <ul className="p-4 text-sm bg-sky-50 text-ai-blue rounded-lg">
          <li className="list-none">
            <span className="font-bold">
              Googleマップ集客(MEO) の関連サービス
            </span>
            <ul className="my-2 text-ai-blue">
              <li className="text-ai-blue">
                Googleマップ集客代行サービス（休止中）
              </li>
              <li className="text-ai-blue">
                <Go href="#support" className="inline">
                  <span className="underline text-blue-600">
                    Googleマップ集客サポートサービス
                  </span>
                </Go>
              </li>
            </ul>
          </li>
          <li className="text-ai-blue list-none">
            <span className="font-bold">
              Googleマップ集客トレーニングの関連サービス
            </span>
            <ul className="my-2">
              <li className="text-ai-blue">
                <Go href="#review-respond" className="inline">
                  <span className="underline text-blue-600">
                    Googleマップ・クチコミ対策メール講座
                  </span>
                </Go>
              </li>
              <li className="text-ai-blue">
                <Go href="#complete-webinar" className="inline">
                  <span className="underline text-blue-600">
                    ズボラGoogleマップ集客完全攻略講座
                  </span>
                </Go>
              </li>
            </ul>
          </li>
          <li className="text-ai-blue list-none">
            <span className="font-bold">集客の仕組み構築サポート</span>
            <ul className="my-2">
              <li className="text-ai-blue">
                <Go href="#single-salon" className="inline">
                  <span className="underline text-blue-600">
                    シングルマザーの時短・高収益１人美容室構築実践講座
                  </span>
                </Go>
              </li>
              <li>
                <Go href="#online-sales" className="inline">
                  <span className="underline text-blue-600">
                    セールス完全攻略講座
                  </span>
                </Go>
              </li>
              <li>
                <Go href="#busines-system" className="inline">
                  <span className="underline text-blue-600">
                    オンライン集客の秘密の仕組み完全攻略講座
                  </span>
                </Go>
              </li>
              <li>
                <Go href="#pricing-survival" className="inline">
                  <span className="underline text-blue-600">
                    生き残るための値付けの極意・完全習得講座
                  </span>
                </Go>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="bg-ai-gold text-ai-yellow p-2 rounded">
          Googleマップ集客(MEO)
        </h2>
        <dl className="text-sm">
          <dt className="bg-ai-gold text-white p-2 rounded">
            Googleマップ集客代行サービス
          </dt>
          <dd>
            <p>現在代行サービスは、海外赴任準備のため休止しております。</p>
            <p>
              リモートでサービスさせていただく、後述のサービスをご検討ください
            </p>
          </dd>
          <dl className="my-0 indent-0">
            <dt className="bg-ai-yellow text-ai-gold my-2 p-2 rounded">価格</dt>
            <dd>
              <p>
                ３ヶ月契約：月当り５万円（合計１５万円
                <span className="text-xs"> [+税]</span>）
              </p>
              <p className="px-8 text-xs">
                最初の１ヶ月目で解約される場合は、残りの２ヶ月分（１０万円）は返金いたします。
                ご契約から１ヶ月（３０日）経過する前にお申し付けください。
              </p>
            </dd>
          </dl>
          <dt id="support" className="bg-ai-gold text-white p-2 rounded">
            Googleマップ集客サポートサービス
          </dt>
          <dd>
            <p className="my-4">
              Alizza Idealの所在地からご遠方の方に最適な準代行サービスです。
              代行サービスとは異なり、写真・動画撮影は、
              ご契約者さまご自身で撮影していただきます。
              撮影する場所、時間帯、状況などは、コチラでご指定させていただきます。
            </p>
            <dl className="my-0 indent-0">
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">
                1. 上位表示を目指すための Googleマップ監査
              </dt>
              <dd>
                <p>
                  Googleマップの設定が適切であるか、毎週監査して報告いたします。
                </p>
                <p>お客さまは、報告書に基づいて設定を改善してください。</p>
                <p>
                  Googleマップに登録したビジネスの設定が、Googleの推奨内容と異なる場合、
                  最悪、検索結果に表示されなくなります。
                </p>
                <p>
                  また、設定を見直したことによって、閲覧数が月３千件から、
                  月１０万件に増加した事例があります。
                  ですので、報告の内容にそって改善されることをおすすめします。
                </p>
              </dd>
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">
                2. 定期写真アップロードサポート
              </dt>
              <dd>
                <p>
                  毎日忙しくて、アップロードする写真を撮影している時間が取れないという方に最適です。
                  お客さまに撮りだめしていただいた写真を、毎日定期的に少しずつアップロードいたします。
                </p>
                <p>
                  アップロードする際には、写真の明るさ・色味の補正、サイズ・構図の調整（切り抜きなど）を行います。
                </p>
                <p>
                  撮影する対象（店内、外観など）や、撮影方法といった
                  Googleが推奨する５種類のベスト写真と種類あたりの枚数をアドバイスします。
                  それに従って写真を撮影してください。
                </p>
                <p className="indent-0 mt-4">
                  <strong>※有料オプションサービス</strong>
                  として、カメラやスマホの操作方法、
                  撮影方法などの技術サポートも承っております
                </p>
              </dd>
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">
                3. 検索表示順位上位をねらえる最新情報作成アドバイス
              </dt>
              <dd>
                <p>
                  最新情報は、最低でも１週間に１度はアップロードしないと、
                  検索表示順位が下がってしまいます。
                  Googleによって、このお店はお客さまに優しくないお店だと
                  判断されてしまうからです。
                </p>
                <p>
                  Googleに好かれて検索表示順位が上がりやすい、
                  しかもお客様にも好かれてご来店にもつながる
                  内容に改善するアドバイスをいたします。
                </p>
                <p>最新情報の内容自体は、ご自身で作成していただきます。</p>
                <p className="indent-0 mt-4">
                  <strong>※有料オプションサービス</strong>
                  として、季節のトピックや行事から、
                  最新情報をおまかせで作成する代行サービスも承っております。
                  トピックと行事については、当方で候補を提案します。
                </p>
              </dd>
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">
                4. お店に行きたくなる説明文の書き方アドバイス
              </dt>
              <dd>
                <p>
                  説明文をどう書いたらいいかわからないと、お悩みではありませんか？
                  説明文は、Googleにもお客様にも好かれるように書くと何が起こるでしょうか？
                </p>
                <p>
                  検索表示順位が上がりやすくなり、
                  Googleマップで検索しているユーザーの目にも止まりやすくなります。
                </p>
                <p>ということは、お客さまのご来店にも繋がります。</p>
                <p>
                  そのような、Googleにもお客様にも好まれる、
                  PASTORフォーミュラ（PASTOR方程式）というメソッドに基づいてアドバイスします。
                </p>
                <p className="indent-0 mt-4">
                  <strong>※有料オプションサービス</strong>
                  として、おまかせで説明文を作成する代行サービスも承っております。
                </p>
                <p>
                  オプションサービスで説明文を作成する際には、
                  説明文を書く目的、読ませたい相手、伝えたい効果、他と異なる特徴などを
                  オンラインミーティングを使って、インタビューさせていただきます。
                </p>
              </dd>
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">価格</dt>
              <dd>
                <p>
                  Googleマップ集客サポートサービスは、契約期間ごとに異なる価格をご用意しております。
                </p>
                <ul className="my-0">
                  <li>
                    １年契約：月当り 24,800 円（合計 297,600 円
                    <span className="text-xs"> [+税]</span>）
                    <br />
                    　　　　　　　3ヶ月契約の 12ヶ月分 357,600 の 83 ％、 60,000
                    円引
                  </li>
                  <li>
                    半年契約：月当り 27,800 円（合計 166,800 円
                    <span className="text-xs"> [+税]</span>）
                    <br />
                    　　　　　　　３ヶ月契約の 6 ヶ月分 178,800 円の 93
                    ％、12,000 円引
                  </li>
                  <li>
                    3ヶ月契約：月当り 29,800 円（合計 894,000 円
                    <span className="text-xs"> [+税]</span>）
                  </li>
                </ul>
              </dd>
              <dt>ご解約について</dt>
              <dd className="text-xs">
                <p>
                  いずれの契約期間でも、最初の１ヶ月目で解約される場合は、
                  残りの期間の分を月割でご返金いたします。
                </p>
                <p>
                  （１年契約の場合は、24,800 円×１１ヶ月分＝ 272,800
                  円のご返金になります）
                </p>
                <p>契約日から１ヶ月経過する前の日までにお申し出ください。</p>
              </dd>
              <dt className="bg-ai-yellow text-ai-gold p-2 rounded">
                有料オプション価格
              </dt>
              <dd>
                <p>有料オプションは、それぞれ１件１万円で承っております。</p>
                <ul className="my-0">
                  <li>撮影技術サポート　１ヶ月間１万円</li>
                  <li>最新情報作成　　　１件　　１万円</li>
                  <li>説明文作成　　　　１件　　１万円</li>
                </ul>
                <p>
                  ５件まとめてのご依頼の場合は、１件あたり８千円です（５件４万円。）
                </p>
              </dd>
            </dl>
          </dd>
        </dl>
        <h2 className="bg-ai-gold text-ai-yellow p-2 rounded">
          Googleマップ集客トレーニングコース
        </h2>
        <dl>
          <dt
            id="review-respond"
            className="bg-ai-yellow text-ai-gold p-2 rounded"
          >
            Googleマップ・クチコミ対策習得コース
          </dt>
          <dd>
            <p>
              Googleマップのクチコミへ、返信してますか？紋切り型の、
              ビジネスライクな返信になっていませんか？
              お客様は、心のつながりを求めています。
              ビジネスライクな返信をすると、大企業のエグゼクティブになった気分になれます。
              しかしその分、お客様は壁を感じてしまい、
              困ったときに頼りにならないお店という印象が植え付けられてしまいます。
            </p>
            <p>
              もしあなたが、返信していない、またはビジネスライクな返信をしていて、
              集客が伸び悩んでいるとしたらそれが原因かもしれません。
            </p>
            <p>
              でも安心してください。このGoogleマップ・クチコミ対策習得コースを受講すれば、
              毎日LINEで配信されるトピックを１日３分読むだけで、
              お客さまが集まる返信をかけるようになります。
            </p>
            <p>
              さらに、低評価でも、逆にお店の評判が良くなって集客につながる返信の方法も学べます。
            </p>
          </dd>
          <dt className="ml-8 bg-ai-yellow text-ai-gold p-2 rounded">価格</dt>
          <dd className="ml-8">
            <p>
              約２ヶ月間、毎日１通、合計で40通以上のLINEメッセージで学習:
              １万９千８００円<span className="text-xs"> [+税]</span>
              （一日あたり５００円以下のお値段です）
            </p>
          </dd>
          <dt
            id="complete-webinar"
            className="mt-8 bg-ai-yellow text-ai-gold p-2 rounded"
          >
            ズボラGoogleマップ集客完全攻略コース
          </dt>
          <dd>
            <p>
              週に４時間作業するだけのズボラをしても、パソコン音痴でも、
              パートの主婦まかせでも、お客さんが集まる「ズボラGoogleマップ集客
              完全攻略コース」をオンラインで配信します。
            </p>
            <p>
              この攻略コースを受講すれば、忙しいあなたでも、 お金をかけずに
              Googleマップ集客が自分できるようになります。
            </p>
          </dd>
          <dt className="ml-8 my-2 bg-ai-yellow text-ai-gold p-2 rounded">
            価格
          </dt>
          <dd className="ml-8">
            <p>
              約２ヶ月間、毎日１通、合計で40通以上のLINEメッセージで学習:
              １万９千８００円<span className="text-xs"> [+税]</span>
              （一日あたり５００円以下のお値段です）
            </p>
            <p>
              この講座でGoogleマップ集客（MEO）の秘訣を学んでしまえば、
              どこかにMEO対策を依頼するお金を節約できます。
            </p>
            <p>
              たとえば、Alizza Ideal の
              MEO対策代行サービスですと１ヶ月３万円です。
              それが３分の１の価格で学ぶことができます。
            </p>
          </dd>
        </dl>
        <h2 className="bg-ai-gold text-ai-yellow p-2 rounded">
          集客仕組み構築サポート
        </h2>
        <dl>
          <dt
            id="single-salon"
            className="bg-ai-yellow text-ai-gold p-2 rounded"
          >
            シングルマザーの時短・高収益１人美容室構築実践講座
          </dt>
          <dd>
            <p>
              シングルマザーだけでなく、１人美容室の月商は、物理的に最高５０万円にしかなりません。
              それも、ホットペッパーを使っている限りは……
            </p>
            <p>
              １人美容室が少なくとも１年以内に、月商１００万円を達成する秘訣とは何か学ぶことができます。
              しかも、無理な長時間労働をせずに、時短で大切な人との時間を作りながら……
            </p>
            <p>
              <b>準備中です。</b>
              ご興味のある方からのお問い合わせは常時受け付けております。
              メールにてお問い合わせください。
            </p>
            <p>
              <Link
                href="mailto:kikuo@alizza-ideal.com"
                className="underline text-blue-500"
              >
                kikuo@alizza-ideal.com
              </Link>
            </p>
          </dd>
          <dt
            id="online-sales"
            className="mt-8 bg-ai-yellow text-ai-gold p-2 rounded"
          >
            セールス完全攻略講座
          </dt>
          <dd>
            <p>
              お客さまに売り込まれていると感じさせずに、
              あなたもストレスを感じずにセールスするにはどうすればいいのでしょうか？
            </p>
            <p>果たしてそのようなセールスなんて可能なのでしょうか？</p>
            <p>
              実は、Alizza Ideal
              のストーリー・セールス・フレームワークを使えば可能です。
            </p>
            <p>
              Alizza Ideal の公式ホームページでご案内している、
              ストーリー・セールスの仕組みを習得できるオンライン講座です。
            </p>
            <p>
              <b>準備中です。</b>
              ご興味のある方からのお問い合わせは常時受け付けております。
              メールにてお問い合わせください。
            </p>
            <p>
              <Link
                href="mailto:kikuo@alizza-ideal.com"
                className="underline text-blue-500"
              >
                kikuo@alizza-ideal.com
              </Link>
            </p>
          </dd>
          <dt
            id="business-system"
            className="mt-8 bg-ai-yellow text-ai-gold p-2 rounded"
          >
            オンライン集客の秘密の仕組み完全攻略講座
          </dt>
          <dd>
            <p>
              オンライン集客で、成果を上げ、利益を増やしている会社は、何をしているのでしょうか？
            </p>
            <p>
              彼らは、単にホームページを作成してお客さまに見られるのを待っていただけではありません。
              ホームページの裏側で、集客で成果を上げる仕組みを構築しているのです。
            </p>
            <p>
              ドットコム・バブルを生き延びた会社がやっていて、秘密にしている
              オンライン集客の仕組みを構築する秘訣を学べます。
            </p>
            <p>
              <b>準備中です。</b>
              ご興味のある方からのお問い合わせは常時受け付けております。
              メールにてお問い合わせください。
            </p>
            <p>
              <Link
                href="mailto:kikuo@alizza-ideal.com"
                className="underline text-blue-500"
              >
                kikuo@alizza-ideal.com
              </Link>
            </p>
          </dd>
          <dt
            id="pricing-survival"
            className="mt-8 bg-ai-yellow text-ai-gold p-2 rounded"
          >
            生き残るための値付けの極意・完全習得講座
          </dt>
          <dd>
            <p>
              どんなに安くしても、赤字覚悟で値付けをしても、なかなか買ってもらえない。
              そのように悩んだことはありませんか？
            </p>
            <p>
              もしかしたら、お客さまにお得感が伝わっていないのかもしれません。
            </p>
            <p>
              お客さまがお得に感じるのは、商品の価値と価格を比較したときに感じます。
              しかし、価値に対して価格が安すぎると、かえって胡散臭くなってしまい、
              敬遠されてしまいます。タダほど高いものはないという感覚です。
            </p>
            <p>
              この講座では、どうやって商品の値付けをすれば、お得感を伝えることができるのかが学べます。
            </p>
            <p>
              <b>準備中です。</b>
              ご興味のある方からのお問い合わせは常時受け付けております。
              メールにてお問い合わせください。
            </p>
            <p>
              <Link
                href="mailto:kikuo@alizza-ideal.com"
                className="underline text-blue-500"
              >
                kikuo@alizza-ideal.com
              </Link>
            </p>
          </dd>
        </dl>
        <h2 className="bg-sky-800 text-white p-2 rounded">インボイス番号</h2>
        <p>
          適格請求書発行事業者の登録番号：
          <span className="underline decoration-wavy">T6810979788765</span>
        </p>
        <div>ご用命はメールにてどうぞ</div>
        <div>
          <Link
            href="mailto:kikuo@alizza-ideal.com"
            className="underline text-blue-500"
          >
            kikuo@alizza-ideal.com
          </Link>
        </div>
        <p className="underline decoration-wavy text-xs">
          注：価格は全て税別です
        </p>
      </div>
    </section>
  )
}
