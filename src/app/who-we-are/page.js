import SectionHeader from "@/components/Common/SectionHeader"
import { storage } from "@/lib/firebase"
import { ref, getDownloadURL } from "firebase/storage"

const metadata = {
  title: "About",
  description: "わたしたちの自己紹介です"
}

export default async function Page() {
  const weAre = ref(storage(), "/videos/who-we-are-alizza-ideal.mp4")
  const weAreURL = await getDownloadURL(weAre)
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `WHO WE ARE`,
              subtitle: (
                <div className="text-center">Alizza Ideal の自己紹介</div>
              ),
              description: (
                <>
                  <p>
                    Alizza
                    Idealは、つつみきくおと、アリザ・つつみが２人で運営しています。
                  </p>
                  <p>実務はきくおが担当。</p>
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
          <div></div>
          <div className="mx-auto">
            <h3>わたしたちが目指すもの</h3>
            <div className="px-6 my-10">
              <p>わたしたちは、</p>
              <ul className="font-bold">
                <li>
                  最先端ので人気のマーケティング手法を学んだり、実践している暇のない、
                </li>
                <li>目の前のお客様へのサービスに集中されている、</li>
                <li>地域の小型店舗に向けて、</li>
              </ul>
              <p>
                マーケティング情報と、マーケティング実務の代行をしています。
              </p>
              <p>
                あなたは、SNS・Googleマップ・
                Google広告・ホームページ・ランディングページ（LP）を
                活用して、売上を上げたいと思っていませんか？
              </p>
              <p>でも、やろうとしても時間がない。</p>
              <p>やってみたけど、よくわからなくて先に進めない。</p>
              <p>そんな店舗オーナーさんは、大勢います。</p>
              <p>
                もしあなたが、そういったことで困っているのなら、
                わたしたちはあなたに進むべき方向をお伝えし、
                一歩前に進むお手伝いをすることができます。
              </p>
              <p>
                目的地がわかって、進むべき方角が決まれば、
                あなたのビジネスは目標に向かってどんどん成長していくことでしょう。
              </p>
            </div>
            <h4 className="text-center">
              Alizza Idealの紹介動画をご覧ください
            </h4>
            <div className="max-w-[480px] md:w-1/3 mx-auto">
              <video
                width="1080"
                height="1920"
                src={weAreURL}
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
          </div>
        </div>
      </div>
    </section>
  )
}
