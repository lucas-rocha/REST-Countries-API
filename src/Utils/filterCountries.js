export const searchCountryByRegion = (region) => {
  const countries = JSON.parse(localStorage.getItem('countries'));
  if (region === null) return countries;
  return countries.filter((country) => country.region === region);
};

export const searchCountryByInputName = (countries, countryName) => {
  if (countryName === '') return JSON.parse(localStorage.getItem('countries'));
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );
};
