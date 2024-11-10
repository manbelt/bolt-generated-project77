export interface Place {
  position: number
  title: string
  reviews: string
  rate: string
  address: string
  type: string
  phone: string
  menu?: string
  latency: string
  long: string
}

export type Category = 'restaurants' | 'bars' | 'beaches' | 'hotels' | 'activities' | 'shopping'
