import type { Metadata } from "next"
import Script from "next/script"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "fbq": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

const thanks: string | React.JSX.Element = <></>

export const metadata: Metadata = {
  title: {
    absolute: "席を確保：店舗オーナーのためのGoogleマップ集客オンライン講座"
  },
  description: `
Googleマップ集客完全攻略術オンライン講座の席を確保してください。

食べログ、ぐるなび、ホットペッパーに掲載しても集客できなくなったとお悩みなら・・・。
この方法ならお金を「１円」も使わずに、
お客さんを２倍、３倍、５倍にできるかもしれません・・・。
  `
}

type Props = {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: Props) {
  const booking = searchParams.booking
  const date = booking ? new Date(`${booking}`) : ""
  const formatted = date.toLocaleString("ja-JP", {
    dateStyle: "full",
    timeStyle: "short"
  })

  return (
    <section id="thanks" className="overflow-hidden m-0 p-0">
      <div>
        <Script id="facebook-pixel">{`
          fbq('track', 'Purchase', { value: 10000.0, currency: "JPY" });
        `}</Script>
      </div>
      <div>
        <div className="text-xl">お申し込みいただきありがとうございます。</div>

        <div>開催日時: {formatted}〜</div>

        <p>
          日程が近づきましたら、参加用のZoomのリンクをメールにてお送りさせていただきます。
        </p>

        <p>
          ドメイン alizza-ideal.com から送信いたします。
          迷惑メールの設定をされていましたら、メールが確実に届くように設定をご確認ください。
        </p>

        <p>よろしくお願いいたします。</p>
      </div>
    </section>
  )
}
