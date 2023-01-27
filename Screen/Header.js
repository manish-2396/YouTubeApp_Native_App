import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={style.Header}>
      <Text style={style.text}>YouTube App</Text>
      <Text>manish</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
    Header:{
        backgroundColor: "red",
        padding:10,
        flexDirection:"row",
        justifyContent: 'space-between'
    },

    text:{
        textAlign:"center",
        fontSize:20
    }
});
