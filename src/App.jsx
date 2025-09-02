import { useState } from "react";

import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

import "./App.css";

function App() {
  let [weather, setWeather] = useState({
    city: "",
    temp: "",
    humidity: "",
    pressure: "",
    feels_like: "",
    description: "",
    wind_speed: "",
  });

  let updateInfo = (newInfo) => {
    setWeather(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weather} />
    </>
  );
}

export default App;
