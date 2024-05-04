export type Encourage = {
  id: number
  title: string
  image: string
  description: string // Markdown
}

export const encourageData = [
  {
    id: 1,
    title: "あなたの収入が、頭打ちになることはなくなります",
    image: "gs://story-made.appspot.com/images/hero/increase-income.svg",
    description: `\
あなたが人の下で働いていては、年収を増やすためにできることは限られます。
しかし成功した個人起業家であれば、収入の上限を気にすることはなくなります。`
  },
  {
    id: 2,
    title: "毎日、充実した仕事ができる",
    image: "gs://story-made.appspot.com/images/hero/fulfilled-work.svg",
    description: `\
あなたの知識と経験とスキルを活かして、世の中の人々のために問題解決を支援し、お役に立つことができます。`
  },
  {
    id: 3,
    title: "労働時間を減らせる",
    image: "gs://story-made.appspot.com/images/hero/work-life-balance.svg",
    description: `\
Alizza Ideal コーチング・キャンパスのシンプルなステップを実践すれば、
労働時間を減らしながら収入を増やすことができ、
ライフスタイルにあわせた柔軟なスケジュールを組むことができます。`
  }
]

export default encourageData
