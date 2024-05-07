import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { container } from "@/constants/Container";
import { Text } from "react-native";
import { text } from "@/constants/Text";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { styles } from "@/app/(onboarding)";
import AppIntroSlider from "react-native-app-intro-slider";

export default function index() {
  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <View style={home.offerContainer}>
          <View style={home.topContainer}>
            <View style={home.welcomeContainer}>
              <Text style={homeText.title}>Xin chào</Text>
              <Text style={text.body}>Hôm nay bạn muốn đi đâu?</Text>
            </View>
            <View style={home.searchIconContainer}>
              <TouchableOpacity>
                <Feather name="search" size={34} color={Colors.light.milk} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={home.midContainer}>
            <SpecialOfferSlider />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export const home = StyleSheet.create({
  offerContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  topContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  midContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    flex: 0,
    alignItems: "flex-start",
    textAlign: "left",
  },
  searchIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 31,
    width: 31,
  },
});

export const homeText = StyleSheet.create({
  title: {
    ...text.title,
    color: Colors.primary,
  },
});

const data = [
  {
    key: "1",
    image: require("@/assets/images/special-offer.png"),
  },
  {
    key: "2",
    image: require("@/assets/images/special-offer.png"),
  },
  {
    key: "3",
    image: require("@/assets/images/special-offer.png"),
  },
  {
    key: "4",
    image: require("@/assets/images/special-offer.png"),
  },
  {
    key: "5",
    image: require("@/assets/images/special-offer.png"),
  },
];

export class SpecialOfferSlider extends React.Component {
  _renderItem = ({ item }: any) => {
    return (
      <View style={{ ...styles.slide }}>
        <Image source={item.image} className="w-full" />
      </View>
    );
  };

  _keyExtractor = (item: any) => item.key;

  render() {
    return (
      <AppIntroSlider
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        data={data}
        dotStyle={{ ...styles.dotStyle, marginTop: 110 }}
        activeDotStyle={{ ...styles.activeDotStyle, marginTop: 110, width: 20 }}
        showNextButton={false}
        showDoneButton={false}
      />
    );
  }
}
