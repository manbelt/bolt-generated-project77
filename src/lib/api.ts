import axios from 'axios';

const API_KEY = '336dc425-275b-42e0-bcd0-4d09d03ce1be';
const BASE_URL = 'https://api.spaceserp.com/google/search';

export const categories = [
  'restaurants',
  'bars',
  'beaches',
  'hotels',
  'activities',
  'shopping'
] as const;

export async function fetchPlaces(category: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        q: category,
        location: 'Xabia,Valencian Community,Spain',
        domain: 'google.es',
        gl: 'es',
        hl: 'en',
        resultFormat: 'json',
        tbm: 'lcl'
      }
    });
    
    return response.data.root.places_results;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
}
