import { Redirect } from "expo-router";

export default function RedirectPage() {
  console.log("--> (launch)");
  return <Redirect href="/(launch)" />;
}
