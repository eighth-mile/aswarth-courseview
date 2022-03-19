import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import DownloadButton from "./Download";
import ListItem from "./ListItem";
import SyncButton from "./Sync";

export default function List({ onPress }) {
  return (
    <View style={[styles.container, 
        {flexDirection: "column"
      }]}>
        {/* <Text>1st Sem BE Phy</Text>
        <Text>9 Subjects</Text>
        <TouchableOpacity>
            <Text>Download</Text>
        </TouchableOpacity> */}
        <ListItem 
        title="1st Sem Phy"
        subtitle="9 Subjects"
        action={<DownloadButton/>}
        />
        <ListItem 
        title="2nd Sem Chem"
        subtitle="8 Subjects"
        action={<DownloadButton/>}
        />
        <ListItem 
        title="3rd Sem Phy"
        subtitle="9 Subjects"
        action={<SyncButton/>}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:8,
    marginVertical:4,
  },
});