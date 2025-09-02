import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let api_url = "https://api.openweathermap.org/data/2.5/weather";
  let api_key = import.meta.env.VITE_WEATHER_API_KEY;

  let getWethorInfo = async (city) => {
    let res = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
    let jsonRes = await res.json();

    let result = {
      city: jsonRes.name,
      temp: jsonRes.main.temp,
      humidity: jsonRes.main.humidity,
      pressure: jsonRes.main.pressure,
      feels_like: jsonRes.main.feels_like,
      description: jsonRes.weather[0].description,
      wind_speed: jsonRes.wind.speed,
    };
    console.log(result);
    return result;
  };

  function onchange(e) {
    setCity(e.target.value);
  }

  let onsubmit = async (e) => {
    e.preventDefault();

    let res = await getWethorInfo(city);
    updateInfo(res);
    setCity("");
  };

  return (
    <div>
      <p style={{ color: "black" }}>SearchBox</p>
      <form onSubmit={onsubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          name="city"
          required
          value={city}
          onChange={onchange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      <br />
    </div>
  );
}
