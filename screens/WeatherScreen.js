// import { FlatList } from "react-native";
// import CategoryTile from "../components/CategoryTile";
// import { CATEGORIES } from "../data";
import { View } from "react-native";
import { Text } from "react-native";
function WeatherScreen({ route, navigation }) {
    
  const latitude = route.params.latitude; 
  const longitude = route.params.longitude;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    weatherCondition: "",
    conditionIcon: "",
  });

  const fetchWeatherData = (lat,long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=6d7a420340071e90f4ba164aa1c27db7&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setWeatherData({
          temperature: json.main.temp,
          locationName: json.name,
          weatherCondition: json.weather[0].main,
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
    fetchWeatherData();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching the weather in Halifax...</Text>
      ) : (
        <Weather weatherData={weatherData} />
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
});

export default WeatherScreen;

