import { FAQ } from "@/types/faq"

const faqData: FAQ[] = [
  {
    id: 1,
    quest: (
      <div className="text-jsutify w-full text-left">
        商品の錬金術テンプレートとは何ですか？
      </div>
    ),
    ans: (
      <>
        <p>
          商品が黄金のように光り輝く魅力を言語化するのに、
          商品の核となる価値を発見するためのテンプレートです。
        </p>
        <p>
          このテンプレートを使うことで、
          集客で真に重要なビジネスのコア・マインドセットを簡単に整えることができます。
        </p>
      </>
    )
  },
  {
    id: 2,
    quest: (
      <div className="text-jsutify w-full text-left">
        キャッチコピーの錬金術テンプレートとは何ですか？
      </div>
    ),
    ans: (
      <>
        <p>
          このテンプレートを使うことで、
          商品・サービスの真の価値を言語化することができます。
          言語化することで、価値が見えるようになり、
          価値を簡単に明確に理解できるようにします。
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
          売り込まなくても、自然に「あなたから買いたい」と言われる仕組みが手に入ります。
        </p>
      </>
    )
  }
]

export default faqData
