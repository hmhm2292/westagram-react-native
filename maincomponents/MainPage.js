import React from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Navbar from "../maincomponents/navbar/Navbar";
import MyStories from "./stories/MyStories";
import Feed from "./feed/Feed";

function MainPage() {
  return (
    <View style={styles.mainPage}>
      <Navbar />
      <KeyboardAwareScrollView extraScrollHeight={10}>
        <MyStories />
        <Feed />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  mainPage: {
    flexDirection: "column",
    height: "100%"
  }
});
