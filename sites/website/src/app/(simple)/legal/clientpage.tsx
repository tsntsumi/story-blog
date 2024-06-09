"use client"
import Link from "next/link"

export default function ClientPage() {
  return (
    <section className="notice m-4">
      <h1>特定商取引法に基づく表記</h1>
      <h2>販売業者</h2>
      <p>堤{"　"}紀久夫</p>
      <h2>運営統括責任者</h2>
      <p>堤{"　"}紀久夫</p>
      <h2>所在地</h2>
      <p>
        プロック７・ハガッドストリート・セントラル・ポバラシオン、カシギュラン市、ソルソゴン・プロビンス、４７０２、フィリピン共和国
      </p>
      <h2>連絡先</h2>
      <dl className="ml-4">
        <dt>メールアドレス</dt>
        <dd className="mt-0">
          <div className="link">
            <Link
              href="mailto:info+inquiry@alizza-ideal.com"
              className="text-[12pt] text-primary underline"
            >
              mailto:info+inquiry@alizza-ideal.com
            </Link>
          </div>
        </dd>
        <dt>電話番号</dt>
        <dd className="mt-0">
          <div className="link">
            <Link
              href="tel:+817090342231"
              className="text-[12pt] text-primary underline"
            >
              +81 709034-
              <ruby>
                223-1<rp>(</rp>
                <rt>ツツミイチバン</rt>
              </ruby>
            </Link>
          </div>
          <div className="text-[8pt]">
            (＊お電話でのお問い合わせ、ご質問は承っておりません。)
          </div>
        </dd>
      </dl>
      <h2>その他について</h2>
      <dl className="ml-4">
        <dt>販売価格</dt>
        <dd>商品販売ページに表示</dd>
        <dt>商品代金以外の必要金額</dt>
        <dd>送料など</dd>
        <dt>個人情報について</dt>
        <dd className="text-md">
          当社はお客さまのプライバシーを第一に考え運営しております。詳細は弊サイト{" "}
          <span className="link">
            &lt;
            <Link href="/policy/" className="text-sm">
              個人情報保護方針
            </Link>
            &gt;{" "}
          </span>
          をご覧ください。
        </dd>
        <dt>受け付け可能な決済手段</dt>
        <dd>クレジットカードまたは国内の銀行振込。</dd>
        <dt>決済期間</dt>
        <dd>
          クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から
          3 日以内にお振り込みいただく必要があります。
        </dd>
        <dt>交換および返品</dt>
        <dd>
          商品が破損していた場合にのみ、ご購入代金を全額返金いたします。返品は承っておりません。
        </dd>
      </dl>
    </section>
  )
}
