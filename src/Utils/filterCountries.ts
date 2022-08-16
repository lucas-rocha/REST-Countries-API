import { CountryItems } from '../Components/CountryGrid';

export const searchCountryByRegion = (region: string) => {
  const countries = JSON.parse(localStorage.getItem('countries') || '{}');
  if (region === '') return countries;
  return countries.filter((country: CountryItems) => country.region === region);
};

export const searchCountryByInputName = (countryName: string) => {
  const countries = JSON.parse(localStorage.getItem('countries') || '{}');
  if (countryName === '') return countries;

  return countries.filter((country: CountryItems) =>
    country.name.common.toLowerCase().includes(countryName)
  );
};
