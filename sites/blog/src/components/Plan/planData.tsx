import { Plan } from "@/types/plan"

const planData: Plan[] = [
  {
    id: 0.25,
    name: "STEP 1",
    href: "#",
    content: (
      <>
        <h4 className="my-0 p-0 mb-2">
          メール講座やビデオ講座を視聴したり、
          オンライン講座に参加して、集客の錬金術の全体像を理解する
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
          コンテンツの錬金術テンプレートとキャッチコピーの錬金術テンプレートを使って、お客を魅了するキャッチコピーを作る
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
          集客シナリオのの錬金術テンプレートで、お客を買う気にさせる仕組みを構築する
        </h4>
      </>
    )
  }
]

export default planData
