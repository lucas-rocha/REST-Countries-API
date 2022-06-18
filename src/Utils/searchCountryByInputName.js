const searchCountryByInputName = (countryName) => {
  const countries = JSON.parse(localStorage.getItem('countries'));
  if (countryName === null) return countries;
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );
};

export default searchCountryByInputName;
