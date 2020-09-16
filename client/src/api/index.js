import axios from 'axios';

axios.defaults.baseURL = 'https://clone-tinder.herokuapp.com';

export const fetchData = async () => {
  try {
      const { data } = await axios.get(`/tinder/cards`);
      return data;
  } catch (error) {
      console.log(error);
  }
}