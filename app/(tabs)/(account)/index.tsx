import { ScrollView, StyleSheet, View } from "react-native";
import { container } from "@/constants/Container";
import { BrownButton } from "@/components/Button";
import { logout } from "@/services/firebaseAuth";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { replaceLog } from "@/services/routerLog";

export default function index() {
  const user = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const pressHandler = async () => {
    try {
      await logout();
      console.log("Logout success");
      replaceLog("/(launch)", "(home) --> (lauch)");
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
