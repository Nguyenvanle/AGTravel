// services/storageService.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(error);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
};

// Khởi tạo Firestore
const db = getFirestore();

export const updateUserToFirestoreWithAsyncStorage = async () => {
  try {
    // Sử dụng hàm getData để lấy thông tin người dùng
    const userInfo = await getData("userInfo");

    if (userInfo && userInfo.uid) {
      const uid = userInfo.uid;
      // Tạo một object user
      const user = { ...userInfo };

      // Đường dẫn đến tài liệu Firestore muốn cập nhật
      const docRef = doc(db, "users", uid);

      // Cập nhật người dùng hiện có hoặc thêm người dùng mới vào Firestore
      await setDoc(docRef, user, { merge: true });
      console.log("Người dùng đã được cập nhật hoặc thêm mới!");
    } else {
      console.log("Không tìm thấy uid trong AsyncStorage");
    }
  } catch (error) {
    console.error("Có lỗi xảy ra khi cập nhật người dùng:", error);
  }
};
