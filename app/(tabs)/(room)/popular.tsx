import AvaliableCard from "@/components/AvaliableCard";
import { data } from "@/utils/dummy";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Popular = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={styles.cardContainer}
          data={data}
          keyExtractor={(data) => data.id}
          renderItem={AvaliableCard}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 10,
  },
});

export default Popular;
