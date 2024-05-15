import type { Metadata } from "next"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

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

export default function Page() {
  return (
    <section id="reservation" className="overflow-hidden m-0 p-0">
      <div>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id="prctbl_1PF6FBFI0fllSO6vbtbIDqii"
          publishable-key="pk_live_51Iztc7FI0fllSO6vrPrthDjNFhcr5tOMwfLPfQzxbwxysufEcSpAsHWO0BYQ2YoTMHUUpIiYH16fji4YVudyzkfg00g58Pk4ai"
        ></stripe-pricing-table>
      </div>
    </section>
  )
}
