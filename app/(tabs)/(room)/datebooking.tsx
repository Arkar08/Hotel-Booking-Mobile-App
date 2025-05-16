import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DateBooking = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DateBooking</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DateBooking;
