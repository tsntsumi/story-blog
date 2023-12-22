import { Plan } from "@/types/plan"

const planData: Plan[] = [
  {
    id: 0.25,
    name: "STEP 1",
    href: "#",
    content: (
      <>
        <h4 className="my-0 p-0 mb-2">
          オンライン講座に参加して、キャッチコピーの錬金術の仕組みを理解する
        </h4>
      </>
    )
  },
  {
    id: 0.3,
    name: "STEP 2",
    href: "#",
    content: (
      <>
        <h4 className="my-0 p-0 mb-2">
          商品とキャッチコピーの錬金術テンプレートを使って、商品の核となる価値を言語化する
        </h4>
      </>
    )
  },
  {
    id: 0.35,
    name: "STEP 3",
    href: "#",
    content: (
      <>
        <h4 className="my-0 p-0 mb-2">
          集客の錬金術シナリオを真似して、マーケットからお客を惹き寄せる
        </h4>
      </>
    )
  }
]

export default planData
