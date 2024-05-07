// hooks/useAuth.js
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Khởi tạo trạng thái loading

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user); // Cập nhật người dùng (user có thể là null)
      setLoading(false); // Cập nhật trạng thái loading thành false khi đã nhận được dữ liệu
    });

    return () => unsub(); // hủy đăng ký listener khi unmount
  }, []);

  return { user, loading }; // Trả về cả user và trạng thái loading
}