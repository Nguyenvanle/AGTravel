import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { container } from "@/constants/Container";
import { Text } from "react-native";
import { text } from "@/constants/Text";
import { Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { styles } from "@/app/(onboarding)";
import AppIntroSlider from "react-native-app-intro-slider";
import { Button, Card, Icon } from "@rneui/themed";
import { PricingCard, lightColors } from "@rneui/base";

export default function index() {
  const [pagoda, setPagoda] = useState(false);
  const [mountain, setMountain] = useState(false);
  const [cultural, setCultural] = useState(false);
  const [general, setGeneral] = useState(false);

  const setAll = () => {
    setPagoda(false);
    setMountain(false);
    setCultural(false);
    setGeneral(false);
  }

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
          
          <View className="justify-start items-start inline-flex self-stretch gap-1.5 pr-1">
          <Text className='pt-4 text-center text-base font-roboto-black'>Loại Tour</Text>
          
          <View className="flex-0  flex-row content-between justify-between self-stretch">
            <TouchableOpacity 
            className="flex-0 h-[76px] w-[76px] bg-brown rounded-xl items-center justify-center"
            onPress={() => {setAll(); setPagoda(true);}}
            >
            <MaterialIcons name="temple-buddhist" size={46} color={pagoda?"white":"black"} />
            </TouchableOpacity>
            <TouchableOpacity className="flex-0 h-[76px] w-[76px] bg-brown rounded-xl items-center justify-center"
             onPress={() => {setAll(); setMountain(true);}}
            >
            <FontAwesome6 name="mountain-sun" size={30} color={mountain?"white":'black'} />
            </TouchableOpacity>
            <TouchableOpacity className="flex-0 h-[76px] w-[76px] bg-brown rounded-xl items-center justify-center"
             onPress={() => {setAll(); setCultural(true);}}
            >
            <MaterialCommunityIcons name="account-music" size={46} color={cultural?"white":'black'} />
            </TouchableOpacity>
            <TouchableOpacity className="flex-0 h-[76px] w-[76px] bg-brown rounded-xl items-center justify-center"
             onPress={() => {setAll(); setGeneral(true);}}
            >
            <FontAwesome5 name="map-marked-alt" size={34} color={general?"white":'black'} />
            </TouchableOpacity>
          </View>

          <Text className='pt-4 text-center text-base font-roboto-black'>Tour Bán Chạy</Text>

          <View className="flex-0 bg-milk flex-row self-stretch justify-between content-between p-2.5 rounded-2xl">
            <View className="flex-1 justify-between py-1.5">
              <Text className="text-sm font-roboto-condensed-black font-bold leading-none">Chùa Hang - Tuyệt sắc linh thiên Châu Đốc</Text>
              <Text className="text-teal-500 text-sm font-roboto-black font-semibold leading-4">30/100</Text>
              <Text className="text-black text-sm font-roboto font-normal leading-4">10K+</Text>
              <Text className="text-rose-600 text-sm font-roboto font-normal leading-4">Từ 580.000 VND</Text>
              <View className="flex-0 flex-row justify-between">
                <Button
                  title={"⭐ 4.5"}
                  buttonStyle={{
                    borderRadius: 13,
                    backgroundColor: Colors.dark.black,
                  }}
                />
                <Button
                title={"Đặt Tour Ngay"}
                buttonStyle={{
                  borderRadius: 13,
                  backgroundColor: Colors.dark.black,
                }}
              />
              </View>
            </View>
            <View className="flex-0 items-end justify-center px-1.5">
              <Image source={require('@/assets/images/chuahang.png')}/>
            </View>
          </View>

          <Text className='pt-4 text-center text-base font-roboto-black'>Tour Mới Nhất</Text>

          <View className="flex-0 bg-milk flex-row self-stretch justify-between content-between p-2.5 rounded-2xl">
            <View className="flex-1 justify-between py-1.5">
              <Text className="text-sm font-roboto-condensed-black font-bold leading-none">Chùa Hang - Tuyệt sắc linh thiên Châu Đốc</Text>
              <Text className="text-teal-500 text-sm font-roboto-black font-semibold leading-4">30/100</Text>
              <Text className="text-black text-sm font-roboto font-normal leading-4">10K+</Text>
              <Text className="text-rose-600 text-sm font-roboto font-normal leading-4">Từ 580.000 VND</Text>
              <View className="flex-0 flex-row justify-between">
                <Button
                  title={"⭐ 4.5"}
                  buttonStyle={{
                    borderRadius: 13,
                    backgroundColor: Colors.dark.black,
                  }}
                />
                <Button
                title={"Đặt Tour Ngay"}
                buttonStyle={{
                  borderRadius: 13,
                  backgroundColor: Colors.dark.black,
                }}
              />
              </View>
            </View>
            <View className="flex-0 items-end justify-center px-1.5">
              <Image source={require('@/assets/images/chuahang.png')}/>
            </View>
          </View>

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
// SpecialOfferSlider
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
