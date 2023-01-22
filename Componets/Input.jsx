import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ setVideoArray }) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    console.log(text);

    let api = "AIzaSyAdsofG3jqDEg3ty4CRsVRBNy9FD0c8KUY";

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${text}&key=${api}`
    )
      .then((res) => res.json())
      .then((res) => {
        setVideoArray(res.items)
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          keyboardType=""
          style={styles.input}
          placeholder="Enter something..."
          onChangeText={(e) => setText(e)}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Submit" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: "center",
  },
  input: {
    marginTop: 20,
    borderColor: "red",
    borderWidth: 1,
    padding: 5,
    width: 300,
  },
  btn: {
    marginTop: 15,
  },
});

export default Input;
