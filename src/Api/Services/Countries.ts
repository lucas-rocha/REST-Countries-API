import axios from 'axios';

export interface ICountries {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: string;
  borders: [];
}

export const getCountries = async () => {
  try {
    const { data } = await axios.get<ICountries[]>(
      'https://restcountries.com/v3.1/all'
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error message: ', error.message);
      return error.message;
    } else {
      console.log('Unexpected error: ', error);
      return 'An unexpected error occured';
    }
  }
};

export const getCountryByName = async (countryName: string) => {
  try {
    const countryNameEncode = encodeURIComponent(countryName);

    const { data } = await axios.get<ICountries[]>(
      `https://restcountries.com/v3.1/name/${countryNameEncode}`
    );

    return data[0];
  } catch (error) {
    return error;
  }
};
