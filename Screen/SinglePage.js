import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Video from "./Video";

const SinglePage = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={styles.box}>
      <Video myvideo={data.id.videoId} />
      <Text style={styles.text}>{data.snippet.title}</Text>
      <Text style={styles.text1}>{data.snippet.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
  },
  text1: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 15,
  },
  container: {
    margin: 10,
  },
  stretch: {
    width: "100%",
    height: 200,
  },
});

export default SinglePage;
