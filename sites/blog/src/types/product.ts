export type Product = {
  name: string
  main_image: string
  available: boolean
  price: number
  public: boolean
  brand: string
  description: string
  amazon_link: string
  images: string[]
  publisher: {
    name: string
    external_id: string
  }
  uppercase_name: string
  added_on: Date
}
