import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ResizeMode } from "expo-av";
import YoutubePlayer from "react-native-youtube-iframe";

const Video = ({ myvideo }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View>
      <YoutubePlayer
        height={220}
        play={playing}
        videoId={myvideo}
        onChangeState={onStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: 750,
    height: 250,
  },
});

export default Video;
