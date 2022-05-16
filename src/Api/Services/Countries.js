import axios from 'axios';

export const getCountries = () =>
  axios.get('https://restcountries.com/v3.1/all');
