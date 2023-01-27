import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const Scroling = ({ data, navigation }) => {
  const handlePress = (e) => {
    navigation.navigate("Single" , {data : e });
  };
  return (
    <View>
      <ScrollView>
        {data &&
          data.map((e, i) => {
            return (
              <View key={i} style={styles.box}>
                <View style={styles.container}>
                  <Image
                    style={styles.stretch}
                    source={{ uri: e?.snippet?.thumbnails.high.url }}
                  />
                </View>
                <Text onPress={() => handlePress(e)} style={styles.text}>
                  {e.snippet.title}
                </Text>
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
    margin: 10,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    margin: 10,
  },
  stretch: {
    width: "100%",
    height: 200,
  },
});

export default Scroling;
