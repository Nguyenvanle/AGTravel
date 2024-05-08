import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { container } from "@/constants/Container";
import { TourList, home, homeText } from "../(home)";
import { text } from "@/constants/Text";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

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

          <View className="justify-start items-start inline-flex self-stretch gap-1.5 pr-1">
            <Text className="pt-4 pb-1 text-center text-base font-roboto-black">
              Địa Điểm Mới Nhất
            </Text>

            <TourList />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
