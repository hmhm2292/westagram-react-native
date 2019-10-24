import React from "react";
import { StyleSheet, View } from "react-native";
import Camera from "./Camera";
import Logo from "./Logo";
import TvAndSend from "./TvAndSend";

function Navbar() {
  return (
    <View style={styles.navbar}>
      <Camera />
      <Logo />
      <TvAndSend />
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    marginTop: 23,
    borderBottomColor: "#efefef",
    borderBottomWidth: 1
  }
});
