import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';

export const fetchData = async () => {
  try {
      const { data } = await axios.get(`/tinder/cards`);
      return data;
  } catch (error) {
      console.log(error);
  }
}