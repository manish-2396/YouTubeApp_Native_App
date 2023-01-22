import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Input from "./Input";
import Scroling from "./Scroling";

const Home = () => {
  const [videoArray, setVideoArray] = useState([]);
  console.log(videoArray);
  return (
    <View>
      <Header />
      <Input setVideoArray={setVideoArray} />
      <View style={styles.box}>
        <Scroling data={videoArray} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
  },
});
export default Home;
