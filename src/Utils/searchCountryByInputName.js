const searchCountryByInputName = (countries, countryName) => {
  if (countryName === null) return countries;
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );
};

export default searchCountryByInputName;
