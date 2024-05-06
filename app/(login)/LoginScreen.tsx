import Logo from "@/components/Logo";
import { container } from "@/constants/Container";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { home, homeText } from "../(tabs)/(home)";
import { text } from "@/constants/Text";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { ButtonCustom } from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Thực hiện xác thực người dùng ở đây
    console.log(email, password);
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
          onChangeText={setPassword}
        />
        <ButtonCustom
          label="Đăng Nhập"
          alert={handleLogin}
          buttonColor={Colors.dark.brown}
          textColor={Colors.light.milk}
        />
      </View>
    </ScrollView>
  );
}

function FormField({ title, placeholder, value, onChangeText }: any) {
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
      ></TextInput>
    </View>
  );
}