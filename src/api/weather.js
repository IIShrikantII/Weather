import axios from "axios";

const fetch = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly`;
  const result = await axios.get(url);
  return result;
};

const weatherApi = {
  fetch,
};

export default weatherApi;
