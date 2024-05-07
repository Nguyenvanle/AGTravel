import Logo from "@/components/Logo";
import { container } from "@/constants/Container";
import { signUp } from "@/services/firebaseAuth";
import { useState } from "react";
import { View, Text, ScrollView, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField } from "../LoginScreen";
import Colors from "@/constants/Colors";
import { BrownButton } from "@/components/Button";
import { router } from "expo-router";
import { getData, storeData } from "@/services/storageService";

export default function SignUpPage() {
  // State cho các trường dữ liệu cần thiết
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

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
        {/* Mỗi FormField sẽ đảm nhiệm việc hiển thị UI cho từng trường dữ liệu */}
        <FormField
          title="Họ và tên"
          placeholder="Nguyễn Văn A"
          value={fullName}
          onChangeText={setFullName}
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
      </View>
    </ScrollView>
  );
}
