import { useEffect, useState } from "react";
import weatherApi from "../api/weather";
import ClipLoader from "react-spinners/ClipLoader";

const Main = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    await navigator.geolocation.getCurrentPosition(async (position) => {
      const { data: dd } = await weatherApi.fetch(
        position.coords.latitude,
        position.coords.longitude
      );
      console.log(dd);
      setData(dd);
      setLoading(false);
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center flex-row h-screen">
        <ClipLoader />
      </div>
    );

  return (
    <div className="bg-red-500 text-9xl h-screen flex justify-center items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="120"
        height="120"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M17 7a8.003 8.003 0 0 0-7.493 5.19l1.874.703A6.002 6.002 0 0 1 23 15a6 6 0 0 1-6 6H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.757-2.143A8.027 8.027 0 0 0 17 7z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
      <h1 className="text-white">{`${data.current_weather.temperature}°C`}</h1>
    </div>
  );
};

export default Main;
