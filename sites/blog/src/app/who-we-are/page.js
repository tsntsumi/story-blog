"use client"
import SectionHeader from "@/components/Common/SectionHeader"
import { Image, Video } from "@/components/Media"
import { CTA } from "@/components/CTA"

const metadata = {
  title: "About",
  description: "わたしたちの自己紹介です"
}

export default function Page() {
  const weArePath = "videos/who-we-are-alizza-ideal.mp4"
  const routine01path =
    "videos/makise-daily-routines/makise-daily-routine-01-720p.mp4"
  const routine02path =
    "videos/makise-daily-routines/makise-daily-routine-02-720p.mp4"
  const routine03path =
    "videos/makise-daily-routines/makise-daily-routine-03-720p.mp4"
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `WHO WE ARE`,
              subtitle: (
                <div className="text-center">
                  Alizza Ideal は、地域密着でがんばっている、
                  あなたのためのマーケティング・エージェンシーです。
                  ビジネスの状況と予算にピッタリとあわせてカスタマイズした、
                  オーダーメイドのマーケティング施策を提供します
                </div>
              ),
              description: (
                <>
                  <p>
                    Alizza Ideal は、 つつみきくおと、
                    アリザ・Ｈ・つつみが２人で運営しています。
                  </p>
                  <p>きくおは実務担当。</p>
                  <p>アリザはきくおの応援担当です。</p>
                </>
              )
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="mx-auto md:w-2/3">
          <div className="mx-auto">
            <h3>わたしたちが目指すもの</h3>
            <p>わたしたちは、</p>
            <ul className="font-bold">
              <li>
                最先端で人気のマーケティング手法を学んだり、実践している暇のない、
              </li>
              <li>目の前のお客様へのサービスに集中されている、</li>
              <li>地域の小型店舗に向けて、</li>
            </ul>
            <p>
              マーケティング情報の提供と、マーケティング実務の代行をしています。
            </p>
            <p>
              特にマーケティング情報は、日本ではすでに手垢のついた、誰でも知っている情報ばかり提供しているわけではありません。
              マーケティングの本場、アメリカのWebサイトやビデオ講座、ウェビナー、メール講座、ニュースレターなどから仕入れています。
              それらの中から、日本でも利用できるもの、できるように加工したものを厳選して提供しています。
            </p>
            <p>
              あなたは、SNS・Googleマップ・
              Google広告・ホームページ・ランディングページ（LP）を、
              もっともっと活用して、売上を上げたいと思いませんか？
            </p>
            <h4 className="text-center">
              Alizza Idealの紹介動画をご覧ください
            </h4>
            <p>わたしが自前で制作した、わたしたちの紹介動画をご覧ください。</p>
            <div className="max-w-[480px] md:w-1/3 mx-auto">
              <Video
                src={weArePath}
                width="1080"
                height="1920"
                alt="We are Alizza Ideal"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="mx-auto object-cover"
              />
            </div>
            <p>
              このようなコンテンツを、期間も費用も最小限にして、あなたにもご提供することができます。
            </p>
            <h3>クライアント様のお客様から評判の制作事例</h3>
            <p>
              店舗のブランディングのために制作した動画の制作事例をご覧いただけます。
            </p>
            <p>
              公開してすぐ、４人の方から「あれ、いいね」とお褒めいただいたそうです。
            </p>
            <p>
              このような、裏側ものはテレビの緊急病棟２４時のように、
              大勢の注目を集めます。
              それに、飾らない人柄を映せば信頼が得られます。
            </p>
            <p>
              飾って気取った憧れられる映像もいいですが、
              着飾らないありのままの自分を見せることが、
              地域で評判のお店になる秘訣です。
            </p>
            <h4>水戸市城東町　まきせ鍼灸整骨院さまの動画制作事例</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Video
                width={340}
                height={240}
                src={routine01path}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
              <Video
                width={340}
                height={240}
                src={routine02path}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
              <Video
                width={340}
                height={240}
                src={routine03path}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto md:w-2/3">
          <p>しかし、わたしもこれまで順風満帆だったわけではありません。</p>
          <h2>３年前の最悪のアドバイス</h2>
          <p>３年前のことです。最悪のアドバイスをされました。</p>
          <blockquote>
            好きな仕事かどうかなんて考えるな。金が稼げりゃいいじゃないか
          </blockquote>
          <p>パワハラで退職し、独立してしばらくしてからのことです。</p>
          <p>でも、もうプログラマとして雇われるものかと決めたんです。</p>
          <p>田舎のプログラマが、どんな扱いをされるか身にしみていたんです。</p>
          <h2>プログラマなんてコンピュータの部品</h2>
          <Image
            src="images/who-we-are/parts-of-machine.jpg"
            width={1024}
            height={683}
            alt="Parts of Machine"
            className="object-cover m-0 p-0 mb-2"
          />
          <p>その２０年前。</p>
          <p>
            わたしは３０度を超える真夏のさなか、冷房の効かない、匂いのきつい、騒音でうるさい部屋に押し込められ、
            ソフトウェアの開発リーダーとして、日々遅れていくプロジェクトの指揮をとっていました。
          </p>
          <p>
            そのプロジェクトは、始まったときからすでに数ヶ月遅れていました。
          </p>
          <p>
            プレッシャーと戦いながら、早朝から深夜まで働き通した結果、
            とうとう身体より先に心が悲鳴を上げたのです。
          </p>
          <h2>部品の安全装置が作動</h2>
          <p>
            ある朝、目が覚めると、起き上がろうとしてもピクリとも身体が動きません。
          </p>
          <p>
            階下から父親が、「どうしたぁ。今日は休みかぁ？」と大声で聞いてくるので、
            「休みじゃないよー。行くよー。」と返事を返すのが精一杯でした。
          </p>
          <p>「どうしよう、朝礼に遅刻する・・・。」</p>
          <p> 行く気にはなっているのですが、身体がいうことをききません。</p>
          <p>脳が、これ以上働くと危険だと、安全回路を発動させたのです。</p>
          <p>まるで、精密機械のように。</p>
          <h2>人間扱いされないと、人間ではなくなる</h2>
          <p>
            とうとう、始業の時間になって、これから出かけても間に合わないことが確定した瞬間、
            やっと身体のコントロールを取りもどせました。
          </p>
          <p>
            今思えば、わたしはプログラマーという人間ではなく、
            プログラムを作るためのコンピュータの部品のように扱われたんです。
          </p>
          <p>それから、無気力なまま過ごしました。</p>
          <p>
            その間に、母がなくなり、父もなくなりました。
            母は、想像力が豊かでした。
          </p>
          <blockquote>
            {" "}
            お前が、青い目のヨメサンつれてきたらどうすべ・・・
          </blockquote>
          <p>と、寝たきりの布団の上でよく言っていました。</p>
          <p>こんな無気力な状態では、日本人と知り合うことすらできないのに。</p>
          <p>普通に生活できるようになったのは１０年後のことです。</p>
          <p>やっと医者から許可がおり、完全に復職することになりました。</p>
          <Image
            src="images/who-we-are/bride-in-flower-garden.jpg"
            width={720}
            height={480}
            alt="Bride in Flower Garden"
            className="object-cover m-0 p-0 mb-2"
          />
          <h2>プログラマを続けた末路</h2>
          <p>復職して、また１０年の月日が流れました。</p>
          <p>最悪のアドバイスをされる２年前のことでした。</p>
          <p>今度は上司からパワハラが始まったんです。</p>
          <p>
            ２０年前と同じ気分を味わいました。
            そしてとうとう、会社の入口まで行くと、動悸がし、吐き気を催し、めまいがして、呼吸が荒くなり、
            中に入れなくなりました。
          </p>
          <h2>人間性を取り戻したい</h2>
          <p>それで、逃げるようにして退職し、独立することにしました。</p>
          <p>
            大学では、プログラミングの他に、経営と、人工知能と認知心理学を専攻していたので、
            自分の強みはそこにあると信じたんです。それらを仕事にしようと考えました。
          </p>
          <p>
            それに以前から、知人の会社で経営の仕方や帳簿の付け方、
            給与計算についてアドバイスしていたので、
            全く経験がないわけでもありませんでした。
          </p>
          <p>
            コンピュータばかりに向き合うより、人と関わることを主軸にした仕事がいいと思ったんです。
          </p>
          <h2>選ばれる理由がない</h2>
          <p>
            しかし、友人・知人以外に、仕事を依頼してくれる人がなかなか見つかりませんでした。
          </p>
          <p>
            そこで、もっと経営やマーケティングのノウハウを数多く仕入れました。
          </p>
          <p>ですが、なかなか選ばれません。</p>
          <p>
            いろいろと研究していった結果、結局、選ばれるための理由として、
            他の競合他社とは、決定的に違う独自の売りがないことが原因だと気がついたんです。
          </p>
          <h2>選ばれる理由は、知識の量でも、技術力でもない</h2>
          <p>
            独立したてのときは、知識の量と、技術力さえ磨いておけば、いつか気づいてもらえると信じてました。
          </p>
          <p>
            しかし、それらは選ぶ側としたら、競合他社とどう違うのか、何が違うのかわかりません。
          </p>
          <p>
            結局、実績と経験の乏しい自分が選ばれる理由は見つけられませんでした。
          </p>
          <p>そして、数ヶ月立ってやっと気が付きました。</p>
          <p>
            自分の信念と仕事に対する情熱に共感してもらう以外にない、ということです。
          </p>
          <h2>自分が自分をモノ扱いしてしまう</h2>
          <p>
            知識の量や技術力を売りにするなんて、
            それこそパソコンのメモリ容量や計算スピードを売りにするのと変わりません。
          </p>
          <p>
            わたしはいつの間にか、自分のことを機械や部品のように扱っていたのです。
          </p>
          <p>
            機械のように扱われることが、どれほど嫌なことなのか、
            十数年の時間を無駄にし、どれくらい人生を棒に振ったのか、
            身にしみてわかっていたつもりだったのに。。。
          </p>
          <h2>自分の情熱を探す旅に出る</h2>
          <Image
            src="images/who-we-are/my-journey.jpg"
            width={720}
            height={480}
            alt="My Journey"
            className="object-cover m-0 p-0 mb-2"
          />
          <p>
            しかし、自分の信念や情熱、つまりナゼこれをしているのかを見つけることは容易ではありません。
          </p>
          <p>
            なんだかんだいって、誰でも言っているような、ありがちの信念とか理念しか思いつかないんです。
          </p>
          <p>
            あるときなど、競合他社の良さげな信念や理念を集めたリストを手に入れました。
          </p>
          <p>
            でも、そこから選んだとして競合他社と差別化することはできません。
            他社と同じことを言っているのですから。
          </p>
          <p>
            いったいどうすれば、自分の独自性を見つけられるのか。
            いろいろな情報を集め、いろいろな手法を試しました。
          </p>
          <p>
            ネットでホームページや、Web講座を受講しても、どこも同じようなことを言っており、
            それ自身が独自で実践的な情報など、見つけることはできませんでした。
          </p>
          <p>
            結局、独自性を見つけるのは、独自性を作る方法を教えている人たちでも、
            満足に作れないほど難しいということだけが分かりました。
          </p>
          <p>
            そこで、わたしは海外のネット情報、特にアメリカのネットに目を向けました。
            なんと言ってもＵＳＰ（ユニークセリングプロポジション；独自の売り）で差別化するアイデアの発祥の地です。
          </p>
          <p>
            ホームページだけでなく、メール講座やビデオ講座、Web講座も受講しました。
          </p>
          <p>もちろん英語です。 話していることの半分も理解できません。</p>
          <p>でも、自分が欲しい物を手に入れるためには、避けては通れません。</p>
          <p>必死に理解しようとしていたんです。</p>
          <h2>ついに自分が情熱をかけているものが見つかる</h2>
          <p>
            ようやく、情熱を持ってやるだけでなく、 毎日やりたくてやりたくて、
            やらずにはいられないことを見つけました。
          </p>
          <p>しかしそれは、大学生のときに諦めたはずの夢でした。</p>
          <p>
            漫画家になって、絵を描き、ストーリーを紡ぎ出して、
            みんなに喜んでもらうという小学生の頃からの夢でした。
          </p>
          <p>
            ですが、大学生の時に同級生の圧倒的な才能と行動力の前に、
            自分の才能のなさに愛想が尽きて先が見えなくなり、軽く絶望して諦めたものだったんです。
          </p>
          <p>
            なのに３０年間、 PhotoshopやIllustrator、Premiere Proなどの
            高価なプロ用のアプリを買い集め、
            演劇の学校に通い、舞台で物語を自ら演じ、 自主制作映画を制作し、
            劇団を立ち上げ、バーの片隅で演劇をしたりしていました。
          </p>
          <h2>まだ燃え尽きていなかった</h2>
          <Image
            src="images/who-we-are/remaining-fire.jpg"
            width={720}
            height={480}
            alt="Remaining Fire"
            className="object-cover m-0 p-0 mb-2"
          />
          <p>
            ようするに、諦めてたはずの夢は、心の奥底でくすぶり続けていたんです。
          </p>
          <p>燃え尽きて、真っ白な灰になんかなっていなかったんです。</p>
          <p>
            しかしこれまで、それに気が付かず、アレをやったりコレを試したりして、
            好きになれる仕事を探していました。
          </p>
          <p>それもコレも、真に自分がやりたいことがわからなかったせいです。</p>
          <h3>焼けぼっくいに火をつける</h3>
          <p>
            ところが、本当に自分のやりたいことが見つかったおかげで、
            自分の強みがはっきりと分かり、多くのヒトに喜んでもらえるような仕事を、
            脇目も振らずに続けることができるようになりました。
          </p>
          <p>
            本当に自分がやりたくてやりたくてたまらない、
            情熱を傾けて熱中できる、消えかけていた火種に別の燃料を焚べました。。
          </p>
          <p>
            その別の燃料とは、漫画家になることから避けるために情熱をかけようとしていた
            経営やマーケティング、そしてプログラミングのスキルです。
          </p>
          <h2>１人なのは、あなただけではない</h2>
          <p>
            自分の情熱を探しているうちに、情熱をかけられる仕事が何かわからないのは自分だけじゃないと気が付きました。
          </p>
          <p>
            世の中の80%の人は、好きな仕事、情熱を傾けられる仕事をしていないんです。
          </p>
          <p>これは、アメリカのコンサルティング会社の調査結果です。</p>
          <p>
            情熱を持って世界を変えるような仕事をし、毎朝わくわくしながら目覚める20%の人がいる一方、
            80%の人は静かで冷たい絶望の人生を過ごしています。
          </p>
          <p>あなたは、どうですか？自分の情熱が何か、気づいてますか？</p>
          <p>
            それを見つけられれば、あなたは充実した人生を過ごせるようになります。
          </p>
          <p>
            それだけではありません。 ライバルと差別化することができ、
            あなたの独自の強みと情熱によって、みんなを喜ばせ、幸せにすることができるんです。
          </p>
          <h2>あなたが今の仕事をしているのはナゼですか？</h2>
          <p>あなたは、なぜ今の仕事をしているんでしょうか？</p>
          <p>
            よくある答えは、「誰かにそうしたほうがいいと言われたから」です。
          </p>
          <p>それは、誰かに行けと言われた道を歩くようなものです。</p>
          <p>
            でも、その道はあなたの行きたいゴールに向かっているのでしょうか？
          </p>
          <p>その先にあるのは、断崖絶壁。。。行き止まりかもしれません。</p>
          <p>スティーブ・ジョブスはいいました。</p>
          <blockquote>人生は短い。他人の人生を生きているヒマはない</blockquote>
          <h2>自分を変えようとしているヒトが増えている</h2>
          <p>
            コロナ禍が始まって以来、自分の世界を変えようとしているヒトが増えています。
          </p>
          <p>副業を始めたり、独立して開業したりする人たちです。</p>
          <p>他人の敷いたレールの上を走るのはまっぴらだと考える人たちです。</p>
          <p>自分の可能性に目覚めた人たちです。</p>
          <p>アメリカでも、政府の統計によると、レイオフされるヒトの数よりも</p>
          <p>
            自分から退職するヒトの方が増えています。 世界的に、Hustle や Side
            Hustle というキーワードをよく目にするようになりました。
          </p>
          <p>「張り切って仕事をする」「副業を頑張る」というような意味です。</p>
          <p>
            なにも、スティーブ・ジョブスやキング牧師のようになれと言ってるわけじゃないんです。
          </p>
          <p>
            ２人は世界を変えましたが、あなたはあなたの世界を変えるだけでいいんです。
          </p>
          <p>そうするヒトが増えることで、そのヒトの周りが影響され、</p>
          <p>少しずつ世界が変わっていくんです。</p>
          <p>
            そして、そのうち不可能だと思われていたことが、当たり前にできると思われるようになります。
          </p>
          <p>まず、あなたが情熱を持って仕事をするんです。</p>
          <p>
            80% のヒトが、自分の仕事を好きだといえる世界を私は夢見ています。
          </p>
          <p>その世界は、どんな世界になるでしょうか。</p>
          <h2>最後に１つだけ、あなたに聞きたいことがあります</h2>
          <div className="w-fit m-auto p-[4rem] rounded-lg border-2 text-xl font-bold text-white bg-slate-400">
            あなたが、やらずにはいられない仕事はなんですか？
          </div>
        </div>
      </div>
    </section>
  )
}
