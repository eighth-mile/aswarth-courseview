import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import DownloadButton from "./Download";

export default function ListItem(prop) {
    const title = prop.title;
    const subtitle = prop.subtitle;
    const action = prop.action;

  return (
    <View style={styles.container}>
        <Text>{title}</Text>      
        <Text>{subtitle}</Text>
        <TouchableOpacity>
            <Text>{action}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    width: '100%',
    flexDirection: 'column',
    borderStyle:'solid',
    borderWidth:1,
    padding:0,
    marginHorizontal:8,
    marginVertical:4,

  },
  title:{
    fontSize:20,
  },
  subtitle:{
      fontSize:16,
      color:'gray',
  }
});