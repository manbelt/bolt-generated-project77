import { fetchPlaces, categories } from '@/lib/api'
import PlaceCard from '@/components/PlaceCard'
import { notFound } from 'next/navigation'
import type { Category } from '@/types'

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: { params: { category: Category } }) {
  const title = `Best ${params.category} in Jávea (Xàbia)`
  const description = `Discover the top ${params.category} in Jávea. Browse reviews, ratings, and detailed information about local ${params.category}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}

export default async function CategoryPage({ params }: { params: { category: Category } }) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  const places = await fetchPlaces(params.category)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {params.category} in Jávea
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place: any) => (
          <PlaceCard key={place.position} place={place} />
        ))}
      </div>
    </div>
  )
}
