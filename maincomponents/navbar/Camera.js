import React from "react";
import { Image, StyleSheet } from "react-native";

function Camera() {
  return (
    <Image
      source={{
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVkSx-jIh2268t3LcgDpBnAUXAyOBWqvg5W5Oqv3EAqioTl8k"
      }}
      style={styles.camera}
    />
  );
}

export default Camera;

const styles = StyleSheet.create({
  camera: { flex: 0.25, width: 25, height: 25, resizeMode: "contain" }
});
