export default function Schedule() {
  return (
    <div className="px-4 text-black">
      <div className="font-bold text-sm">開催日程：</div>
      <div className="ml-2">
        <div>1: 2024年5月19日(日) 13:00〜15:00</div>
        <div>2: 2024年5月21日(火) 16:00〜18:00</div>
        <div>3: 2024年5月25日(土) 14:00〜16:00</div>
      </div>
      <div>
        <span className="font-bold text-sm">会場：</span>
        <span className="text-xs">オンライン開催 (Zoomを利用します)</span>
      </div>
      <div>
        <span className="font-bold text-sm">定員：</span>
        <span className="text-xs">各回約20名</span>
      </div>
    </div>
  )
}
