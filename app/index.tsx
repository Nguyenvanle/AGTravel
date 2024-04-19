import { Redirect } from "expo-router";

export default function RedirectPage() {
  console.log("/ redirect to (launch)");
  return <Redirect href="/(launch)" />;
}
