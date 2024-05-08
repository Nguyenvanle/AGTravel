import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { container } from "@/constants/Container";
import { logout } from "@/services/firebaseAuth";
import { router, useSegments } from "expo-router";
import { BrownButton } from "@/components/Button";
import {
  getCurrentUserInfoFromFirestore,
  getData,
  getToursFromAsyncStorage,
  storeToursToAsyncStorage,
  updateUserToFirestoreWithAsyncStorage,
} from "@/services/storageService";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { FormFieldBooking } from "../(booking)";
import Colors from "@/constants/Colors";

export default function index() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const segments = useSegments();
  const { user, loading } = useAuth();

  useEffect(() => {
    const fetchUserInfo = async () => {
      await updateUserToFirestoreWithAsyncStorage();
      console.log("Cập nhật thành công");
      const userInfo = await getCurrentUserInfoFromFirestore(user);
      setUserInfo(userInfo);
      console.log(userInfo);
    };

    fetchUserInfo();
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
    console.log(user?.uid);
    const userInfo = await getCurrentUserInfoFromFirestore(user);
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

  const handleGetTour = async () => {
    try {
      await storeToursToAsyncStorage();
      const toursInfo = await getToursFromAsyncStorage();
      console.log(toursInfo);
    } catch (error: any) {
      console.log("Lỗi GetTour:", error.message);
    }
  };
  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        {!userInfo ? (
          <ActivityIndicator size="large" color={Colors.dark.grey} />
        ) : (
          <>
            <FormFieldBooking
              title="Họ Và Tên"
              placeholder={userInfo?.fullName}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Email"
              placeholder={userInfo?.email}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Số Điện Thoại"
              placeholder={userInfo?.phone}
              multiline={true}
              editable={false}
            />
            <FormFieldBooking
              title="Ngày Sinh"
              placeholder={userInfo?.birthday}
              multiline={true}
              editable={false}
            />
            <BrownButton
              label={"Đăng xuất"}
              onPress={pressHandler}
            ></BrownButton>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
