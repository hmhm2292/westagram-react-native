import React from "react";
import { Image, StyleSheet } from "react-native";
import instaLogo from "../img/logo_text.png";

function Logo() {
  return <Image source={instaLogo} style={styles.instaLogo} />;
}

export default Logo;

const styles = StyleSheet.create({
  instaLogo: {
    flex: 1,
    height: 35,
    resizeMode: "contain"
  }
});
