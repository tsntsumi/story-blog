import { NextRequest, NextResponse } from "next/server"
import { updateDocumentRating } from "@/lib/firebase/firestore"

type Rating = {
  id: string
  rating: number
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  if (!data.id) {
    return NextResponse.json({ error: "missing id" }, { status: 400 })
  }

  try {
    await updateDocumentRating("blogs", data.id, data.rating)
    return NextResponse.json({ status: 400 })
  } catch (e) {
    return NextResponse.json(
      { error: "exception: " + e.message },
      { status: 400 }
    )
  }
}
