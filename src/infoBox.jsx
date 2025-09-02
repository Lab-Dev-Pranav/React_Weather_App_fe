import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// cold icon
import AcUnitIcon from "@mui/icons-material/AcUnit";
// hot icon
import SunnyIcon from "@mui/icons-material/Sunny";
// rain icon
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let hotUrl =
    "https://images.unsplash.com/photo-1643522122751-c355b90abdc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcndldGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let coldUrl =
    "https://images.unsplash.com/photo-1675600025372-f7aac0ccb76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdldGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let ranimUrl =
    "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? ranimUrl : info.temp > 20 ? hotUrl : coldUrl
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} Weather {""}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 20 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Temperature: {info.temp}°C
            <br />
            Humidity: {info.humidity}%
            <br />
            Pressure: {info.pressure} hPa
            <br />
            Feels Like: {info.feels_like}°C
            <br />
            Description: {info.description}
            <br />
            Wind Speed: {info.wind_speed} m/s
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
