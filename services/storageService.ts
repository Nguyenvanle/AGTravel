// services/storageService.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDoc, doc, setDoc, collection, getDocs } from "firebase/firestore";
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

export const storeToursToAsyncStorage = async () => {
  try {
    // Lấy reference đến collection 'tours'
    const toursColRef = collection(db, "tours");

    // Lấy tất cả documents từ collection 'tours'
    const tourSnapshot = await getDocs(toursColRef);
    // Chuyển documents thành mảng các đối tượng tour, bao gồm cả id
    const tourList = tourSnapshot.docs.map((doc) => ({
      id: doc.id, // Thêm id vào đây
      ...doc.data(),
    }));

    // Lưu tourList vào AsyncStorage dưới dạng JSON string
    const jsonValue = JSON.stringify(tourList);
    await AsyncStorage.setItem("tours", jsonValue);

    console.log("Danh sách tour đã được lưu vào AsyncStorage");
  } catch (error) {
    console.error(
      "Có lỗi xảy ra khi lưu danh sách tour vào AsyncStorage:",
      error
    );
  }
};

export const getToursFromAsyncStorage = async () => {
  try {
    // Lấy danh sách tours từ AsyncStorage
    const jsonValue = await AsyncStorage.getItem("tours");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(
      "Có lỗi xảy ra khi lấy danh sách tour từ AsyncStorage:",
      error
    );
  }
};

export const storeSelectedTourInfo = async (tourInfo: object) => {
  try {
    // Chuyển đổi thông tin tour thành chuỗi JSON để lưu trữ
    const jsonValue = JSON.stringify(tourInfo);
    // Lưu chuỗi JSON vào AsyncStorage với key 'selectedTourInfo'
    await AsyncStorage.setItem("selectedTourInfo", jsonValue);
    console.log("Thông tin tour đã được lưu thành công.");
  } catch (error) {
    console.error("Có lỗi xảy ra khi lưu thông tin tour:", error);
  }
};

export const getSelectedTourInfo = async () => {
  try {
    // Truy xuất chuỗi JSON của thông tin tour từ AsyncStorage
    const jsonValue = await AsyncStorage.getItem("selectedTourInfo");
    if (jsonValue == null) {
      console.log("Không có thông tin tour nào được lưu trữ.");
      return null;
    }
    // Chuyển đổi chuỗi JSON về định dạng object để sử dụng
    console.log("Thông tin tour đã được truy xuất thành công.");
    return JSON.parse(jsonValue);
  } catch (error) {
    console.error("Có lỗi xảy ra khi truy xuất thông tin tour:", error);
  }
};