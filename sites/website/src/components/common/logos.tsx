"use client"

export const DrivingSchool = () => (
  <div className="flex flex-wrap items-end justify-start gap-2 m-0 p-0 w-72 mx-auto text-5xl font-bold">
    <span>
      D<span className="text-4xl">RIVE</span>
    </span>{" "}
    <span>
      <span className="text-4xl">to</span>
    </span>{" "}
    <span>
      I<span className="text-4xl">DEAL</span>
    </span>{" "}
    <span className="text-3xl">
      C<span className="text-xl">AMPUS</span>
    </span>
  </div>
)

export const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)

export const 個人起業家 = () => <SoloPreneur />
