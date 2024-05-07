import { ScrollView, StyleSheet, View } from "react-native";
import { container } from "@/constants/Container";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { logout } from "@/services/firebaseAuth";
import { router } from "expo-router";
import { BrownButton } from "@/components/Button";

export default function index() {
  const user = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const pressHandler = async () => {
    try {
      await logout();
      console.log("Logout success");
      console.log(`(account) --> (login)`);
      router.replace(`/(login)/LoginScreen`);
    } catch (error: any) {
      console.log("Logout fail: ", error.message);
    }
  };

  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <BrownButton label={"Đăng xuất"} onPress={pressHandler}></BrownButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
