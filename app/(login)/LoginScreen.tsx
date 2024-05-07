import Logo from "@/components/Logo";
import { container } from "@/constants/Container";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { ButtonCustom } from "@/components/Button";
import { signIn } from "@/services/firebaseAuth";
import { Link, router } from "expo-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false); // thêm trạng thái loading

  const handleLogin = async () => {
    setLoading(true); // bắt đầu hoạt ảnh loading
    try {
      // Thực hiện xác thực người dùng ở đây sử dụng async/await
      const userCredential = await signIn({ email, password });
      // Tiếp tục logic ở đây sau khi đăng nhập thành công
      console.log("Đăng nhập thành công:", userCredential);
      console.log(`(login) --> (home)`);
      router.replace(`/(tabs)/(home)`);
    } catch (error: any) {
      // Hiển thị một thông báo lỗi nếu có
      console.log("Đăng nhập thất bại:", error);
      Alert.alert("Đăng nhập thất bại", error.message);
    } finally {
      setLoading(false); // kết thúc hoạt ảnh loading
    }
  };

  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <Logo />
        <FormField
          title="Email"
          placeholder="nguyenvana@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <FormField
          title="Mật khẩu"
          placeholder="*******************"
          value={password}
          secureTextEntry // Thêm thuộc tính này để ẩn mật khẩu
          onChangeText={setPassword}
        />
        {isLoading ? ( // nếu đang tải, hiển thị hoạt ảnh
          <ActivityIndicator size="large" color={Colors.dark.grey} />
        ) : (
          <ButtonCustom
            label="Đăng Nhập"
            onPress={handleLogin}
            buttonColor={Colors.dark.brown}
            textColor={Colors.light.milk}
          />
        )}
        <Link
          href={"/(login)/(forgot)"}
          className="text-center text-white text-base font-roboto-bold"
        >
          Quên mật khẩu?
        </Link>
        <Text className="text-center text-white text-sm font-roboto">
          Bạn chưa có tài khoản?
          <Link
            href={"/(login)/(signup)"}
            className="text-center text-primary text-sm font-roboto-bold"
          >
            {" "}
            Đăng ký
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

export function FormField({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
}: any) {
  return (
    <View className="flex-1 py-[10px] justify-center self-stretch gap-2.5">
      <Text className="text-black self-stretch text-[15px] font-roboto-bold capitalize ">
        {title}
      </Text>
      <TextInput
        className="bg-milk h-12 px-2.5 py-4 rounded-xl justify-start items-center gap-2.5 inline-flex"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} // Để ngăn nhập liệu mật khẩu
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      ></TextInput>
    </View>
  );
}