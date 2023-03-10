import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ setVideoArray }) => {
  const [text, setText] = useState("");
  const handlePress = () => {
    let api = "";
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${text}&key=${api}`
    )
      .then((res) => res.json())
      .then((res) => {
        setVideoArray(res.items);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: "https://img.icons8.com/fluency/512/youtube.png",
          }}
        />
      </View>
      <View>
        <TextInput
          keyboardType=""
          style={styles.input}
          placeholder="Search..."
          onChangeText={(e) => setText(e)}
        />
      </View>
      <View>
        <Button style={styles.btn} title="Submit" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "red",
  },
  logo: {
    width: 66,
    height: 48,
  },
  input: {
    borderColor: "",
    borderWidth: 1,
    padding: 5,
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  btn: {
    marginTop: 10,
    marginRight:2
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
  },
});

export default Input;
