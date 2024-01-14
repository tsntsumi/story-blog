/** @file map-search.js */

var axios = require("axios")

const APIKEY = process.env.APIKEY
const LAT = process.env.LAT
const LNG = process.env.LNG
const QUERY = process.env.QUERY
const RADIUS = process.env.RADIUS

const textsearch = "https://maps.googleapis.com/maps/api/place/textsearch/json"
const nearbysearch =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
const detail = "https://maps.googleapis.com/maps/api/place/details/json"
// const loc = { lat: 36.36074082461211, lng: 140.42849257736435 } // 見川町
const loc = { lat: LAT || 36.34107462420403, lng: LNG || 140.44895859577323 } // 笠原町
const radius = RADIUS || 15000
// const type = "beauty_salon"
// choose from https://developers.google.com/maps/documentation/places/web-service/supported_types?hl=ja
const query = QUERY || "水戸市笠原町 美容室"

;(async () => {
  const url =
    // `${nearbysearch}?location=${loc.lat},${loc.lng}&radius=${radius}&type=${type}&key=${APIKEY}`
    `${textsearch}?location=${loc.lat},${loc.lng}&radius=${radius}&query=${query}&key=${APIKEY}`
  const config = {
    method: "get",
    url: url,
    headers: {},
  }

  const response = await axios(config)
  const places = response.data.results
  console.info("LOC, QUERY:", loc, query)
  console.info(url)
  const now = new Date()
  const today =
    "" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
  console.info(
    `"#", "name", "address", "phone #", "rating", "# users", "<website>", "# photos", "# reviewers", "date"`
  )
  let i = 0
  for await (p of places) {
    const placeid = p.place_id
    const apikey = process.env.APIKEY
    const detail_config = {
      method: "get",
      url: `${detail}?place_id=${placeid}&fields=name,rating,formatted_address,formatted_phone_number,business_status,website,user_ratings_total,reviews,photos&language=ja&key=${apikey}`,
      headers: {},
    }

    const resp = await axios(detail_config)
    // console.info(`INFO: ${Object.keys(resp.data.result)}`)
    const {
      business_status,
      formatted_address,
      formatted_phone_number,
      name,
      photos,
      price_level,
      rating,
      reviews,
      user_ratings_total,
      website,
    } = resp.data.result
    i += 1
    console.info(
      `${i}, "${name}", "${formatted_address}", "${formatted_phone_number}", "${
        rating || ""
      }", "${user_ratings_total || ""}", "${website || ""}", "${
        photos?.length || "no photo"
      }", "${reviews?.length || "no review"}", ${today}`
    )
  }
})()

const types = [
  { bakery: "パン屋" },
  { bar: "バー" },
  { beauty_salon: "美容室" },
  { bicycle_store: "自転車店" },
  { book_store: "書店" },
  { cafe: "カフェ" },
  { car_dealer: "カーディーラー" },
  { car_rental: "レンタカー" },
  { car_repair: "自動車修理" },
  { car_wash: "洗車場" },
  { clothing_store: "洋品店" },
  { convenience_store: "コンビニ" },
  { dentist: "歯科医" },
  { doctor: "医師" },
  { drugstore: "薬局" },
  { electrician: "電気工" },
  { electronics_store: "電器店" },
  { florist: "生花店" },
  { furniture_store: "家具店" },
  { gas_station: "ガソリンスタンド" },
  { gym: "ジム" },
  { hair_care: "ヘアサロン" },
  { hardware_store: "工具店" },
  { home_goods_store: "家庭用品" },
  { insurance_agency: "保険代理店" },
  { jewelry_store: "宝石店" },
  { laundry: "ランドリー" },
  { lawyer: "法律家" },
  { library: "図書館" },
  { liquor_store: "酒屋" },
  { locksmith: "鍵屋" },
  { lodging: "旅館" },

  { accounting: "会計士" },
  { airport: "空港" },
  { amusement_park: "アミューズメントパーク" },
  { aquarium: "水族館" },
  { art_gallery: "アートギャラリー" },
  { atm: "ＡＴＭ" },
  { bank: "銀行" },
  { bowling_alley: "ボウリング場" },
  { bus_station: "バスステーション" },
  { campground: "キャンプ場" },
  { casino: "カジノ" },
  { cemetery: "墓地" },
  { church: "教会" },
  { city_hall: "市役所" },
  { courthouse: "裁判所" },
  { department_store: "デパート" },
  { embassy: "大使館" },
  { fire_station: "消防署" },
  { funeral_home: "" },
  { hindu_temple: "" },
  { hospital: "病院" },
  { light_rail_station: "" },
  { local_government_office: "" },
  { meal_delivery: "" },
  { meal_takeaway: "" },
  { mosque: "" },
  { movie_rental: "" },
  { movie_theater: "映画館" },
  { moving_company: "" },
  { museum: "美術館" },
  { night_club: "ナイトクラブ" },
  { painter: "塗装店" },
  { park: "公園" },
  { parking: "駐車場" },
  { pet_store: "ペットショップ" },
  { pharmacy: "薬局" },
  { physiotherapist: "理学療法士" },
  { Plumber: "配管工" },
  { Police: "警察" },
  { post_office: "郵便局" },
  { primary_school: "小学校" },
  { real_estate_agency: "不動産" },
  { restaurant: "レストラン" },
  { roofing_contractor: "屋根工事店" },
  { rv_park: "駐車場" },
  { school: "学校" },
  { secondary_school: "中学校" },
  { shoe_store: "靴屋" },
  { shopping_mall: "ショッピングモール" },
  { spa: "スパ" },
  { stadium: "スタジアム" },
  { storage: "倉庫" },
  { store: "小売店" },
  { subway_station: "地下鉄駅" },
  { supermarket: "スーパー" },
  { synagogue: "ユダヤ教会" },
  { taxi_stand: "タクシー" },
  { tourist_attraction: "観光スポット" },
  { train_station: "駅" },
  { transit_station: "バス停" },
  { travel_agency: "旅行会社" },
  { university: "大学" },
  { veterinary_care: "動物病院" },
  { zoo: "動物園" },
]
