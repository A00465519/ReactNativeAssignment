import HomeScreen from "./screens/HomeScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import WeatherScreen from "./screens/WeatherScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Home"
        component={HomeScreen}
        options= {{title: "Welcome User!"}}>
        </Stack.Screen>

        <Stack.Screen
        name = "FeedBack"
        component={FeedbackScreen}
        options= {{title: "Class Feedback"}}>
        </Stack.Screen>
        
        <Stack.Screen
        name = "Weather"
        component={WeatherScreen}
        options= {{title: "Today's Weather"}}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

