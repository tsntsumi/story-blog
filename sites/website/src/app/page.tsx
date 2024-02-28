import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "% | ALIZZA IDEAL 公式サイト",
    default: "ALIZZA IDEAL 公式",
    absolute:
      "コーチ、ヒーラー、セラピストがクライアントに出会うなら ALIZZA IDEALの導線確保トレーニング"
  },
  description: `
コーチ、ヒーラー、セラピスト、サロンオーナーになり、
他人に貢献するために起業・開業・副業を始める人が増えています。
しかし、だれもが自分を必要とするクライアントに出会えているわけではありません。
Alizza Idealでは、あなたがクライアントに出会うための導線を確保するトレーニングサービスを提供しています。
このトレーニングサービスを受けることで、
あなたは理想のクライアント(YOUR IDEALs)に出会い、彼らの目標達成に貢献できるようになります。
そして、あなた自身もゴールを達成し、充実した毎日を送ることになります。
`
}

export default function Page() {
  return (
    <>
      <div>これは本文ではありませんヨ</div>
    </>
  )
}
