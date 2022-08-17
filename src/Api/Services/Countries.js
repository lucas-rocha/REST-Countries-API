import axios from 'axios';

export const getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export const getCountryByName = async (countryName) => {
  try {
    const countryNameEncode = encodeURIComponent(countryName);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryNameEncode}`
    );
    return response.data[0];
  } catch (error) {
    return console.error(error);
  }
};
