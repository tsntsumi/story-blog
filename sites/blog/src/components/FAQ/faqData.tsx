import { FAQ } from "@/types/faq"

const faqData: FAQ[] = [
  {
    id: 1,
    quest: (
      <div className="text-jsutify w-full text-left">
        集客の錬金術の商品コンセプト・テンプレートとは何ですか？
      </div>
    ),
    ans: (
      <>
        <p>商品の真の価値を発見し言語化するためのテンプレートです。</p>
        <p>
          商品の価値を、光り輝く黄金のように見える化できれば、
          お客に欲しがらせることができます。
        </p>
        <p>
          商品の真の価値を発見するためには、
          ビジネスのマインドセットを整える必要があります。
        </p>
        <p>
          あなたは、集客の錬金術を学ぶことで、
          簡単に整えることが出来るようになります。
        </p>
      </>
    )
  },
  {
    id: 2,
    quest: (
      <div className="text-jsutify w-full text-left">
        集客の錬金術のキャッチコピー・テンプレートとは何ですか？
      </div>
    ),
    ans: (
      <>
        <p>
          このテンプレートを使うことで、
          見かけだけではない、商品・サービスの真の価値を
          言語化することができるようになります。
        </p>
        <p>
          言語化することで、商品そのものの価値が、そのままお客に伝わるようになります。
        </p>
      </>
    )
  },
  {
    id: 3,
    quest: (
      <div className="text-jsutify w-full text-left">
        集客の錬金術シナリオとは何ですか？
      </div>
    ),
    ans: (
      <>
        <p>
          このシナリオを使うことで、集客したお客とのコミュニケーションが楽になり、
          売り込まなくても、自然に「あなたから買いたい」と言わせる仕組みが手に入ります。
        </p>
      </>
    )
  }
]

export default faqData
