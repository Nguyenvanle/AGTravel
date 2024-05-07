import Colors from "@/constants/Colors";
import { container } from "@/constants/Container";
import { useAuth } from "@/hooks/useAuth";
import { Redirect, router, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RedirectPage() {
  // Hàm xác định trang hiện tại từ đó chuyển hướng tới trang tiếp theo dựa trên trang hiện tại
  const [currentSegments] = useSegments();
  const user = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (user) {
      console.log(`/ x-> (home)`);
      router.replace(`/(tabs)/(home)`); // Chuyển đổi này phụ thuộc vào định nghĩa của các routes của bạn.
    }
    setLoading(false);
  }, [currentSegments, user]);

  return (
    <View style={container.root}>
      <ActivityIndicator size={60} color={Colors.light.white} />
    </View>
  );
}
