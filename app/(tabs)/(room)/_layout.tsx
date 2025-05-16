import { Stack } from "expo-router";

const RoomLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[roomId]" options={{ headerShown: false }} />
      <Stack.Screen
        name="datebooking"
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen name="popular" options={{ headerTitleAlign: "center" }} />
      <Stack.Screen name="avaliable" options={{ headerTitleAlign: "center" }} />
    </Stack>
  );
};

export default RoomLayout;
