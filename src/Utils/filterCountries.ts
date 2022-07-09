import { CountryItems } from '../Components/CountryGrid';

export const searchCountryByRegion = (region: string) => {
  const countries = JSON.parse(localStorage.getItem('countries') || '{}');
  if (region === '') return countries;
  return countries.filter((country: CountryItems) => country.region === region);
};

export const searchCountryByInputName = (
  countries: Array<CountryItems>,
  countryName: string
) => {
  if (countryName === '')
    return JSON.parse(localStorage.getItem('countries') || '{}');
  return countries.filter((country: CountryItems) =>
    country.name.common.toLowerCase().includes(countryName)
  );
};
