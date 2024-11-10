import { Place } from '@/types'
import { StarIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
      
      <div className="flex items-center gap-2 mb-2">
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <span>{place.rate} ({place.reviews} reviews)</span>
      </div>
      
      {place.address && (
        <div className="flex items-start gap-2 mb-2">
          <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
          <span className="text-gray-600">{place.address}</span>
        </div>
      )}
      
      {place.phone && (
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5 text-gray-500" />
          <a href={`tel:${place.phone}`} className="text-blue-600 hover:underline">
            {place.phone}
          </a>
        </div>
      )}
    </div>
  )
}
