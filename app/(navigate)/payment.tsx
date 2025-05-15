import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Payment</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Payment;