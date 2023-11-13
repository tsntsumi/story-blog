import Image from "next/image"
import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "@/lib/firebase"

export default async function HeroImage({ image, alt, ...params }) {
  const imageURL = await getDownloadURL(ref(storage(), image))
  return <Image src={imageURL} alt={alt} {...params} />
}
