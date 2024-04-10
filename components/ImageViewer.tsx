import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource }: any) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 176,
    height: 262,
  },
});
