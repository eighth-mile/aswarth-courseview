import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import List from "./components/List";

export default function App() {
  return (
    <View style={[styles.container, 
      {flexDirection: "column"
    }]}>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
