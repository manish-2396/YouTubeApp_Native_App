import { View, Text, StyleSheet, ScrollView } from "react-native";
import Video from "./Video";

const Scroling = ({ data }) => {
  // console.log(data[1]?.id.videoId);
  return (
    <View>
      <ScrollView>
        {data &&
          data.map((e, i) => {
            return (
              <View key={i} style={styles.box}>
                <Video myvideo={e.id.videoId}/>
                <Text style={styles.text}>{e.snippet.title}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignContent: "center",
    margin:10
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Scroling;
