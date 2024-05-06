import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Colors from "@/constants/Colors";
import { text } from "@/constants/Text";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    key: "1",
    title: "An Giang\nKhởi Đầu Cuộc Phiêu Lưu",
    text1: "Mở ra chương mới, khám phá An Giang",
    text2:
      "Từ cánh đồng bạt ngàn đến ngọn núi hùng vĩ\n An Giang đang chờ bạn khám phá.",
    image: require("@/assets/images/welcometoangiang.jpg"),
  },
  {
    key: "2",
    title: "Khám Phá An Giang \nVới Một Cái Chạm",
    text1: "Tìm và đặt tour nhanh chóng\n Khám phá không giới hạn",
    text2: "Mọi chuyến đi bắt đầu từ một cái chạm",
    image: require("@/assets/images/dattour.png"),
  },
  {
    key: "3",
    title: "Trải Nghiệm Ứng Dụng \nƯu Đãi Độc Quyền",
    text1:
      "Giảm giá? Quà tặng? Chúng tôi có đủ cả!\n Chỉ dành cho thành viên AGTravel",
    text2: "Trải nghiệm đặt tour trên AGTravel \nNhận ưu đãi lên đến 40%",
    image: require("@/assets/images/ordernow.png"),
  },
  {
    key: "4",
    title: "Chuyến Đi Của Bạn\n Sự An Tâm Của Chúng Tôi",
    text1:
      "Tận hưởng một hành trình an toàn\n Chúng tôi luôn sẵn sàng giúp đỡ bạn",
    text2: "Tận hưởng từng khoảnh khắc\n Chúng tôi sẽ lo phần còn lại.",
    image: require("@/assets/images/slide4.png"),
  },
];

export default class OnBoardingPage extends React.Component {
  _renderItem = ({ item }: any) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text className="font-roboto-medium text-primary text-center font-medium font-size text-2xl">
          {item.title}
        </Text>
        <Text
          style={text.body}
          className="font-roboto-slab-semi-bold px-5 py-1 pt-5"
        >
          {item.text1}
        </Text>
        <Text style={text.body} className="font-roboto px-5 py-1">
          {item.text2}
        </Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="arrowright"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="check" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="close" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  _keyExtractor = (item: any) => item.key;

  render() {
    const doneHandler = () => {
      console.log(`(onboarding) --> (signup)`);
      router.push(`/(login)/(signup)`);
    };

    const skipHandler = () => {
      console.log("(onboarding) x-> (signup)");
      router.push("/(login)/(signup)");
    };

    return (
      <SafeAreaView className="flex-1 bg-black">
        <StatusBar style="light" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          onDone={doneHandler}
          showSkipButton={true}
          onSkip={skipHandler}
          renderSkipButton={this._renderSkipButton}
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
    backgroundColor: Colors.background,
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
    marginBottom: 15,
  },
  dotStyle: {
    backgroundColor: Colors.dark.grey,
  },
  activeDotStyle: {
    backgroundColor: "white",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: Colors.dark.grey,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});