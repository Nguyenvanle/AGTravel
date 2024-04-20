import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";

const data = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("@/assets/images/canhdong.png"),
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("@/assets/images/nuicam.png"),
  },
];

type Item = (typeof data)[0];

export default class OnBoardingPage extends React.Component {
  _renderItem = ({ item }: { item: Item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: Colors.background,
          },
        ]}
      >
        <Image source={item.image} className="bg-black w-auto h-2/3" />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  render() {
    return (
      <SafeAreaView className="flex-1">
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: "65%",
    marginBottom: 32,
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
