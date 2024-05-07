import Colors from "@/constants/Colors";
import { container } from "@/constants/Container";
import { useAuth } from "@/hooks/useAuth";
import { replaceLog } from "@/services/routerLog";
import { router, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RedirectPage() {
  // Hàm xác định trang hiện tại từ đó chuyển hướng tới trang tiếp theo dựa trên trang hiện tại
  const [currentSegments] = useSegments();
  const user = useAuth();
  // Hàm tải dữ liệu user và khi segments hiện tại được tải sau đó logic chuyển hướng
  useEffect(() => {
    if (user) {
      console.log(`/ x-> (home)`);
      router.replace(`/(tabs)/(home)`); // Chuyển đổi này phụ thuộc vào định nghĩa của các routes của bạn.
    } else {
      replaceLog("/(launch)", "/ --> (launch)");
    }
  }, [currentSegments, user]);

  return (
    <View style={container.root}>
      <ActivityIndicator size={60} color={Colors.light.white} />
    </View>
  );
}
