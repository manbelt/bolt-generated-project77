import Link from 'next/link'
import { categories } from '@/lib/api'
import { 
  BuildingStorefrontIcon,
  BeakerIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  MapIcon
} from '@heroicons/react/24/outline'

const categoryIcons = {
  restaurants: BuildingStorefrontIcon,
  bars: BeakerIcon,
  hotels: HomeIcon,
  shopping: ShoppingBagIcon,
  activities: UserGroupIcon,
  beaches: MapIcon,
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Jávea
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Your comprehensive guide to the best places, experiences, and hidden gems in Xàbia.
          </p>
          <Link
            href="/about"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Jávea
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <Link
                key={category}
                href={`/${category}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold capitalize mb-2 group-hover:text-blue-600 transition-colors">
                    {category}
                  </h3>
                  <p className="text-gray-600">
                    Discover the best {category} in Jávea
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Jávea Directory
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Get insider tips and recommendations from local experts.'
              },
              {
                title: 'Updated Daily',
                description: 'Fresh content and the latest information about local businesses.'
              },
              {
                title: 'Comprehensive Guide',
                description: 'Everything you need to know about Jávea in one place.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
