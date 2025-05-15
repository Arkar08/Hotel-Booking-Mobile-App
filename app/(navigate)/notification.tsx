import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Notification</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Notification;