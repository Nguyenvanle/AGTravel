import Colors from "@/constants/Colors";
import { container } from "@/constants/Container";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RedirectPage() {
  const { user, loading } = useAuth();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Cập nhật trạng thái khi dữ liệu của người dùng và segments có sẵn
  useEffect(() => {
    if (loading == false) {
      setIsDataLoaded(true);
    }
  }, [loading]);

  // Chuyển hướng khi tất cả dữ liệu đã sẵn sàng
  useEffect(() => {
    if (isDataLoaded) {
      if (user) {
        console.log(`/ x-> (home)`);
        router.replace(`/(tabs)/(home)`);
      } else {
        console.log(`/ x-> (launch)`);
        router.replace(`/(launch)`);
      }
    }
  }, [isDataLoaded]);

  return (
    <View style={container.root}>
      <ActivityIndicator size={60} color={Colors.light.white} />
    </View>
  );
}
