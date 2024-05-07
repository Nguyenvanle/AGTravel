import { ScrollView, StyleSheet, View } from "react-native";
import { container } from "@/constants/Container";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { logout } from "@/services/firebaseAuth";
import { router } from "expo-router";
import { BrownButton } from "@/components/Button";
import {
  getData,
  updateUserToFirestoreWithAsyncStorage,
} from "@/services/storageService";

export default function index() {
  const user = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const pressHandler = async () => {
    try {
      await logout();
      console.log("Logout success");
      console.log(`(account) --> (launch)`);
      router.replace(`/(launch)`);
    } catch (error: any) {
      console.log("Logout fail: ", error.message);
    }
  };

  const handleGetUserInfo = async () => {
    const userInfo = await getData("userInfo");
    console.log(userInfo);
  };

  const handleDatabaseUpdate = async () => {
    try {
      await updateUserToFirestoreWithAsyncStorage();
      console.log("Cập nhật thành công");
    } catch (error: any) {
      console.log("Cập nhật thất bại: ", error.message);
    }
  };

  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <BrownButton label={"Đăng xuất"} onPress={pressHandler}></BrownButton>
        <BrownButton
          label={"Thông tin user"}
          onPress={handleGetUserInfo}
        ></BrownButton>
        <BrownButton
          label={"Cập nhật Database"}
          onPress={handleDatabaseUpdate}
        ></BrownButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
