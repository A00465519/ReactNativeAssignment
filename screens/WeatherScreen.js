import { View, Text , StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";

function WeatherScreen({ route, navigation }) {  
  const latitude = route.params.latitude; 
  const longitude = route.params.longitude;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    locationName: "",
    weatherCondition: "",
    conditionIcon: "",
  });

  const fetchWeatherData = (lat,long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=6d7a420340071e90f4ba164aa1c27db7&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setWeatherData({
          temperature: json.main.temp,
          locationName: json.name,
          weatherCondition: json.weather[0].description,
          conditionIcon: json.weather[0].icon,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    /// Wrapped with an async scope because we're using await in useEffect
    fetchWeatherData(latitude, longitude);
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching the weather in Halifax...</Text>
      ) : (
        <View style={styles.weatherContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.conditionIcon}@2x.png`,
              }}
              style={{ width: 120, height: 120 }}
            />
            <Text style={styles.tempText}>{weatherData.locationName}</Text>
            <Text style={styles.title}>{weatherData.temperature} ˚C</Text>
            <Text style={styles.subtitle}>{weatherData.weatherCondition}</Text>
          </View>
        </View>
      )}
      {error && <Text style={{ color: "red" }}>Opps something went wrong..!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    marginTop: 90,
    marginBottom: 55,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tempText: {
    fontSize: 48,
    color: "black",
    marginTop: 5,
  },
  title: {
    fontSize: 48,
    color: "black",
  },
  subtitle: {
    fontSize: 24,
    color: "black",
  },
});

export default WeatherScreen;