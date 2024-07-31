export function ArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 w-full bg-white p-2 drop-shadow rounded-lg">
      <div className="aspect-video bg-gray-200 rounded-lg"></div>
      <div className="bg-gray-200 mt-1 py-[0.75rem]"></div>
      <div className="bg-gray-200 mt-1 text-center py-[0.75rem]"></div>
      <div className="bg-gray-200 mt-1 text-center py-[0.75rem]"></div>
    </div>
  )
}

export function LatestArticlesSkeleton() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">最新記事一覧(読み込み中...)</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="grid grid-cols-3 gap-2 px-2">
          {[1, 2, 3, 4, 5].map((a, i) => {
            return (
              <div
                key={`article-${a}`}
                className="flex flex-row items-center justify-between"
              >
                <ArticlesSkeleton />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
