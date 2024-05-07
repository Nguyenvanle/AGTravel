import { AllRoutes, router } from "expo-router";

// Định nghĩa lại kiểu RelativePathString phù hợp với cấu hình của 'expo-router'.
type RelativePathString = `./${string}` | `../${string}` | "..";

/**
 * Sử dụng để thay thế route hiện tại bằng một route mới sử dụng dạng đường dẫn tương quan.
 * @param href - Đường dẫn tương quan muốn navigate đến.
 * @param log - Thông điệp log để mô tả sự kiện navigation.
 */
export function pushLog(href: AllRoutes, log: string) {
  // Logging sự kiện navigation
  console.log(log);

  // Sử dụng chức năng replace của router để thay thế route hiện tại.
  router.replace({ pathname: href });
}

export function replaceLog(href: AllRoutes, log: string) {
  // Logging sự kiện navigation
  console.log(log);

  // Sử dụng chức năng replace của router để thay thế route hiện tại.
  router.replace({ pathname: href });
}

// Ví dụ sử dụng
replaceLog("/(launch)", "(home) --> (launch)"); // Di chuyển lên cấp trên và vào trang profile.
