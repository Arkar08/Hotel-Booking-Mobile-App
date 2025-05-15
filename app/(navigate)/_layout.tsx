import { Stack } from "expo-router";

const NavigateLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="personaldetail" />
            <Stack.Screen name="notification" />
            <Stack.Screen name="payment" />
        </Stack>
    )
}

export default NavigateLayout;