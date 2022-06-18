const searchCountryByRegion = (region) => {
  const countries = JSON.parse(localStorage.getItem('countries'));
  if (region === null) return countries;
  return countries.filter((country) => country.region === region);
};

export default searchCountryByRegion;
