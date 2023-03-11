import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

function HomeScreen({navigation}) {
    return (
    <View >
        <Text>{feedbackText}</Text>
        <Button
            title="Checkout your class feedback"
            onPress={() => navigation.navigate("FeedBack")}>
        </Button>
        <Button
            title="Look up the lates weather in Halifax"
            onPress={() => navigation.navigate("Weather", { latitude: "44.6476", longitude: "63.5728"})}>
        </Button>
    </View>
  );
}

export default HomeScreen;