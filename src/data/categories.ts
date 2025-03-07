
import categoriesData from './categories.json';

export interface City {
  name: string;
  slug: string;
}

export interface Country {
  name: string;
  slug: string;
  cities: City[];
}

export const getAllCountries = (): Country[] => {
  return categoriesData.countries;
};

export const getCountryBySlug = (slug: string): Country | undefined => {
  return categoriesData.countries.find(country => country.slug === slug);
};

export const getCityBySlug = (countrySlug: string, citySlug: string): City | undefined => {
  const country = getCountryBySlug(countrySlug);
  if (!country) return undefined;
  
  return country.cities.find(city => city.slug === citySlug);
};

export const getAllCategoryCombinations = () => {
  const combinations: { country: string; city: string }[] = [];
  
  categoriesData.countries.forEach(country => {
    country.cities.forEach(city => {
      combinations.push({
        country: country.slug,
        city: city.slug
      });
    });
  });
  
  return combinations;
};
import { searchHotels } from './hotels';
import categoriesJson from './categories.json';
import { cache } from 'react';

export function getAllCountries() {
  return categoriesJson.countries;
}

export function getAllCategoryCombinations() {
  const combinations = [];
  
  for (const country of categoriesJson.countries) {
    for (const city of country.cities) {
      combinations.push({
        country: country.slug,
        city: city.slug
      });
    }
  }
  
  return combinations;
}

export function getCityDetails(countrySlug: string, citySlug: string) {
  const country = categoriesJson.countries.find(c => c.slug === countrySlug);
  if (!country) return null;
  
  const city = country.cities.find(c => c.slug === citySlug);
  if (!city) return null;
  
  return {
    name: city.name,
    slug: city.slug,
    countryName: country.name,
    countrySlug: country.slug,
    getHotels: cache(async () => {
      return await searchHotels("Hotel", city.name);
    })
  };
}
