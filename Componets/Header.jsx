import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={style.Header}>
      <Text style={style.text}>YouTube App</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
    Header:{
        backgroundColor: "red",
        padding:10
    },

    text:{
        textAlign:"center",
        fontSize:30
    }
});
