import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import Video from "./Componets/Video";
import Home from "./Componets/Home";
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  video: {
    width: 300,
    height: 100,
  },
});
