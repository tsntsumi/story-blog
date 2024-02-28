import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "% | ALIZZA IDEAL 公式サイト",
    default: "ALIZZA IDEAL 公式",
    absolute:
      "コーチ、ヒーラー、セラピストがクライアントに出会うなら ALIZZA IDEALの導線確保トレーニング"
  },
  description: `
コーチ、ヒーラー、セラピスト、サロンオーナーとして他人に貢献しようと
起業・開業・副業を始める人が増えています。
しかし、だれもが自分を必要としているクライアントに出会えるわけではありません。
Alizza Idealでは、あなたがクライアントに出会う導線を確保するための
トレーニングコースを提供しています。
あなたがこのトレーニングを受ければ、理想のクライアント(YOUR IDEALs)に出会い、
彼らの目標達成に貢献することが簡単になります。
そして、あなた自身も自分のゴールを達成し、充実した毎日を送ることになるのです。
`
}

export default function Page() {
  return (
    <>
      <div>困難と達成と充実の連鎖</div>
    </>
  )
}
