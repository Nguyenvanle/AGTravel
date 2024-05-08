import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { container } from "@/constants/Container";
import { signUp } from "@/services/firebaseAuth";
import { getSelectedTourInfo, storeData } from "@/services/storageService";
import { Link, router, useLocalSearchParams, useSegments } from "expo-router";
import { FormField } from "@/app/(login)/LoginScreen";
import { BrownButton } from "@/components/Button";
import Colors from "@/constants/Colors";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function index() {
  // State cho các trường dữ liệu cần thiết
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  // Hiển thị "Đang tải..." nếu chưa có dữ liệu
  if (selectedTour === null) {
    return <Text>Đang tải...</Text>;
  }

  // Xử lý logic đăng ký bên trong một hàm riêng biệt
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp.");
      return;
    }
    // Logic đăng ký người dùng
    setLoading(true);
    try {
      const userCredential = await signUp({ email, password });
      Alert.alert("Thành công", "Tài khoản đã được tạo.");
      // Lưu thông tin người dùng vào AsyncStorage
      await storeData("userInfo", {
        fullName,
        email,
        phone,
        birthday,
        uid: userCredential.user.uid,
      });
      console.log(`(login) --> (home)`);
      router.replace(`/(tabs)/(home)`);
    } catch (error: any) {
      Alert.alert("Đăng ký thất bại", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
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
          value={selectedTour.title}
          onChangeText={setFullName}
          multiline={true}
          numberOfLines={6}
          editable={false}
        />
        <FormField
          title="Email"
          placeholder="nguyenvana@gmail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <FormField
          title="Số điện thoại"
          placeholder="0356887321"
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
        <FormField
          title="Ngày sinh"
          placeholder="01/01/2000"
          value={birthday}
          onChangeText={setBirthday}
        />
        <FormField
          title="Mật khẩu"
          placeholder="**********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <FormField
          title="Xác nhận mật khẩu"
          placeholder="**********"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.dark.grey} />
        ) : (
          <BrownButton label="Đăng Ký" onPress={handleSignUp} />
        )}
        <Text className="text-center text-sm font-roboto-black text-black">
          {
            "Khi tiếp tục, bạn đã đồng ý với \n Điều khoảng sử dụng và Chính sách bảo mật "
          }
        </Text>
        <Text className="text-center text-white text-sm font-roboto">
          Bạn đã có tài khoản?
          <Link
            href={"/(login)/LoginScreen"}
            className="text-center text-primary text-sm font-roboto-bold"
          >
            {" "}
            Đăng nhập
          </Link>
        </Text>
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
      ></TextInput>
    </View>
  );
}
