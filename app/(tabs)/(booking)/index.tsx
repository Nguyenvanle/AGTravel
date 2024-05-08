import {
  ActivityIndicator,
  Alert,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { container } from "@/constants/Container";
import { getSelectedTourInfo } from "@/services/storageService";
import { router, useSegments } from "expo-router";
import { FormField } from "@/app/(login)/LoginScreen";
import { BrownButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "react-native";

export default function index() {
  // State cho các trường dữ liệu cần thiết
  const [address, setAddress] = useState("");
  const [numOfParticipants, setNumOfParticipants] = useState("");

  const [isLoading, setLoading] = useState(false);

  const [selectedTour, setSelectedTour] = useState<any>(null);
  const segments = useSegments();

  useEffect(() => {
    const fetchTourInfo = async () => {
      const tourInfo = await getSelectedTourInfo();
      setSelectedTour(tourInfo);
    };

    fetchTourInfo();
  }, [segments]);

  const compareNum = () => {
    let str = selectedTour.slot;
    let firstTwoChars = str.substring(0, 2);
    console.log(firstTwoChars); // Output: "He"

    let strNum1 = str;
    let strNum2 = numOfParticipants;

    const isInteger = /^-?\d+$/.test(numOfParticipants);

    if (!isInteger) return 0;

    // Chuyển chuỗi thành số nguyên rồi so sánh
    try {
      let num1 = parseInt(strNum1);
      let num2 = parseInt(strNum2);

      if (num1 > num2) {
        console.log(strNum1 + " lớn hơn " + strNum2);
        return 1;
      } else if (num1 < num2) {
        console.log(strNum1 + " nhỏ hơn " + strNum2);
        return 2;
      } else {
        console.log(strNum1 + " bằng " + strNum2);
        return 3;
      }
    } catch (e) {
      return 4;
    }
  };

  // Xử lý logic đăng ký bên trong một hàm riêng biệt
  const handleSignUp = async () => {
    if (address && numOfParticipants) {
      if (compareNum() === 0)
        Alert.alert("Sai thông tin", "Số người tham gia phải là số nguyên");
      else if (compareNum() === 2)
        Alert.alert(
          "Sai thông tin",
          "Số người tham gia vượt quá chỗ trống còn lại"
        );
      else
        Alert.alert(
          "Thành công",
          "Thông tin đặt tour của bạn đã được lưu lại."
        );
      router.replace("/");
    } else {
      Alert.alert("Thiếu thông tin", "Vui lòng nhập đủ thông tin đặt tour.");
    }
  };

  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        {selectedTour === null ? (
          <>
            <ActivityIndicator size="large" color={Colors.dark.grey} />
          </>
        ) : (
          <>
            <Text className="text-primary text-xl font-roboto-bold capitalize leading-snug">
              {selectedTour.title}
            </Text>
            <Image
              source={{ uri: selectedTour.imageSrc }}
              className="w-[333px] h-[333px] rounded-xl"
              resizeMode="cover"
            ></Image>
            {/* Mỗi FormField sẽ đảm nhiệm việc hiển thị UI cho từng trường dữ liệu */}
            <FormFieldBooking
              title="Giới Thiệu"
              placeholder={selectedTour.introduce}
              multiline={true}
              numberOfLines={4}
              editable={false}
            />
            <FormFieldBooking
              title="Giá Tour"
              placeholder={`Từ ${selectedTour.price} VND/ Người`}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Mô Tả Hành Trình"
              placeholder={selectedTour.wayInfo}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Thời Gian"
              placeholder={selectedTour.time}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Chỗ Trống Còn Lại"
              placeholder={selectedTour.slot}
              multiline={true}
              editable={false}
            />

            <FormField
              title="Địa chỉ đón"
              placeholder="Nhập địa chỉ đón"
              keyboardType="default"
              value={address}
              onChangeText={setAddress}
              autoCapitalize="words"
            />
            <FormField
              title="Số người tham gia"
              placeholder="Nhập số người tham gia"
              keyboardType="numeric"
              value={numOfParticipants}
              onChangeText={setNumOfParticipants}
              autoCapitalize="none"
            />

            {isLoading ? (
              <ActivityIndicator size="large" color={Colors.dark.grey} />
            ) : (
              <BrownButton label="Đăng Ký" onPress={handleSignUp} />
            )}
            <Text className="text-center text-sm font-roboto-black text-black">
              {
                "Khi tiếp tục, bạn đã đồng ý với \n Chính sách hủy/hoàn tiền và Điều khoản sử dụng dịch vụ "
              }
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export function FormFieldBooking({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  multiline,
  numberOfLines,
  editable,
}: any) {
  return (
    <View className="flex-1 py-[10px] justify-center self-stretch gap-2.5">
      <Text className="text-black self-stretch text-[15px] font-roboto-bold capitalize ">
        {title}
      </Text>
      <TextInput
        editable={editable}
        className="bg-milk px-2.5 py-4 rounded-xl justify-start items-center gap-2.5 inline-flex"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} // Để ngăn nhập liệu mật khẩu
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="black"
      ></TextInput>
    </View>
  );
}
