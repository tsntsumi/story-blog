"use client"
import React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF
} from "@react-google-maps/api"
import Script from "next/script"
import accessesData from "./accessesData"
import SingleAccess from "./SingleAccess"
import SectionHeader from "../common/sectionheader"

const containerStyle = {
  width: "100%",
  height: "80vh",
  margin: 0,
  padding: 0
}
const iconbase = "/images/icon/"
const home = {
  title: "まきせ鍼灸整骨院",
  position: { lat: 36.372354763598125, lng: 140.49922758891987 },
  url: iconbase + "home-pin.svg",
  width: 48,
  height: 48
}
const parking = {
  title: "まきせ専用駐車場",
  position: { lat: 36.372609063275725, lng: 140.499390533115 },
  url: iconbase + "parking-pin.svg",
  width: 24,
  height: 24,
  originX: 15,
  originY: 30
}
const infoStyle = {
  background: "white",
  fontSize: 7.5
}
const center = home.position
const zoom = 16

const Map = () => {
  const APIKEY = process.env.NEXT_PUBLIC_FIREBASE_APIKEY
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined)
  const [icon, setIcon] = useState<undefined | google.maps.Icon>(undefined)
  const [label, setLabel] = useState<undefined | any>(undefined)
  const infoWindowOptions = {
    pixelOffset: size
  }
  const createOffsetSize = () => setSize(new google.maps.Size(0, -45))
  useEffect(() => {
    if (!size) {
      return
    }
    const parkingIcon = {
      url: parking.url,
      scaledSize: new window.google.maps.Size(parking.width, parking.height),
      labelOrigin: new window.google.maps.Point(15, 30)
    }
    const parkingLabel = {
      text: parking.title,
      color: "#fff",
      fontSize: "10px",
      className: "bg-green-800 px-1 rounded-lg w-full text-center mx-auto"
    }
    setIcon(parkingIcon)
    setLabel(parkingLabel)
  }, [size])
  return (
    <LoadScript googleMapsApiKey={APIKEY} onLoad={() => createOffsetSize()}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <MarkerF position={home.position} />
        <MarkerF position={parking.position} icon={icon} label={label} />
        <InfoWindowF position={home.position} options={infoWindowOptions}>
          <div style={infoStyle}>
            <Image
              src={home.url}
              width={home.width}
              height={home.height}
              alt={home.title}
              className="inline mx-2"
            />
            <span color={"green.400"} className="font-bold text-sm">
              {home.title}
            </span>
          </div>
        </InfoWindowF>
      </GoogleMap>
    </LoadScript>
  )
}

const Access = () => {
  const apikey = process.env.NEXT_PUBLIC_FIREBASE_APIKEY

  const query = encodeURI("まきせ鍼灸整骨院")
  const origin = encodeURI("水戸駅")
  return (
    <>
      {/* <!-- ===== Accesses Start ===== --> */}
      <section id="accesses" className="pt-24">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "当院へのアクセス",
              subtitle: "",
              description: (
                <div>
                  <h3>営業時間（予約受付時間）</h3>
                  <p>8:00～12:30、15:00～20:00</p>
                  <p className="text-sm">
                    昼12:30から、夜20:00からもお受けしています。
                  </p>
                  <p>
                    予約優先ですが、急な痛みなどあなたの状況に合わせて、予約なしでも受診できます。
                  </p>
                  <h3>定休日</h3>
                  <p>日曜・祝日・水曜午後</p>
                </div>
              )
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="flex flex-wrap items-start justify-between">
            <div className="w-full md:w-[40%]">
              <h3>電車でお越しの場合</h3>
              <p>
                最寄り駅は３つございますが、常磐線水戸駅よりバス又はタクシーをご利用されることをおすすめします。
              </p>
              <div className="pl-6">
                <h4 className="my-2">常磐線・水戸駅から</h4>
                <p>水戸駅北口バスターミナル３番停留所より</p>
                <p>茨城交通・若宮団地方面行き（③系統バス）乗車</p>
                <p>若宮団地アパート入口バス停下車、徒歩２分</p>
                <h4 className="my-2">水郡線・常陸青柳駅から</h4>
                <p>徒歩22分</p>
                <h4 className="my-2">鹿島臨海鉄道・東水戸駅から</h4>
                <p>徒歩23分</p>
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <h3>お車でお越しの場合</h3>
              <div className="pl-6">
                <h4 className="my-2">国道６号方面から</h4>
                <p>
                  若宮団地入口交差点（ファミリーマート水戸若宮店近く）から、旧陸前浜街道方面に進んで下さい。
                </p>
                <h4 className="my-2">水戸駅方面から</h4>
                <p>国道５１号を国道６号方面に向かい、</p>
                <p>
                  茨城交通バス(株)
                  浜田営業所手前のセブンイレブン水戸東桜川店前の交差点を桜川方面に曲がり、
                </p>
                <p>常磐線を渡って直進すると、右手に見えてきます。</p>
              </div>
            </div>
          </div>

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Accesses item Start --> */}
            {accessesData.map((access, key) => (
              <SingleAccess access={access} key={key} />
            ))}
            {/* <!-- Accesses item End --> */}
          </div>
        </div>
        <div className="w-full mx-0 my-4">
          <Map />
        </div>
      </section>

      {/* <!-- ===== Accesses End ===== --> */}
    </>
  )
}

export default Access
