import React from "react";
import { View, StyleSheet, Image } from "react-native";

function TvAndSend() {
  return (
    <View style={styles.tvAndSend}>
      <Image
        source={{
          uri:
            "https://seeklogo.com/images/I/igtv-logo-BD616E2F49-seeklogo.com.png"
        }}
        style={styles.igTv}
      />
      <Image
        source={{
          uri:
            "https://cdn3.iconfinder.com/data/icons/instagram-18/512/182_Instagram_Sets_Share-128.png"
        }}
        style={styles.plane}
      />
    </View>
  );
}

export default TvAndSend;

const styles = StyleSheet.create({
  tvAndSend: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    paddingRight: 10
  },

  igTv: {
    width: 28,
    height: 28,
    resizeMode: "contain"
  },

  plane: {
    width: 28,
    height: 28,
    resizeMode: "stretch"
  }
});
