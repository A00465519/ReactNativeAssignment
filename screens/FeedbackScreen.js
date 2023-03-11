import { View } from "react-native";
import { Text } from "react-native";

function FeedbackScreen({ navigation }) {
  const feedbackText = `It was an amazing class and I learnt a lot about React Native.
     One suggestion is to have a single project that is incrementally expanded to add more features instead of having 4 separate projects.`
  const feedbackHeaderText = "MCDA5550 React Native Class Feedback"
  return (
    <View style={styles.feedbackContainer}>
      <View style={styles.feeedbackHeaderContainer}>
        <Text style={styles.feeedbackHeaderText}></Text>
      </View>
      <View style={styles.feedbackTextContainer}>
        <Text style={styles.feeedbackText}>{feedbackText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedbackContainer: {
    flex: 1,
    width: "100%",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  feeedbackHeaderContainer: {
    flex: 1,
  },
  feeedbackHeaderText: {
    fontSize: 20,
    marginTop: 5,
  },
  feedbackTextContainer: {
    flex: 2,
    paddingLeft: 25,
    marginBottom: 150,
  },
  feeedbackText: {
    fontSize: 16,
    color: "black",
  },
});

export default FeedbackScreen;