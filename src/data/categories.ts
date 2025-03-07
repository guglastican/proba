
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
