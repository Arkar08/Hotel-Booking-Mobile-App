import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewBooking = () => {
  const { bookingId } = useLocalSearchParams();

  console.log(bookingId);

  return (
    <SafeAreaView>
      <Text>View Booking</Text>
    </SafeAreaView>
  );
};

export default ViewBooking;
