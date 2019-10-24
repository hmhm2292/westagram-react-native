import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export class GenerateStories extends Component {
  render() {
    const { userPic, userId } = this.props.story;
    return (
      <View style={styles.story}>
        <TouchableOpacity>
          <Image source={{ uri: userPic }} style={styles.userPicture} />
        </TouchableOpacity>
        <Text style={styles.userId}>{userId}</Text>
      </View>
    );
  }
}

export default GenerateStories;

const styles = StyleSheet.create({
  story: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5
  },
  userPicture: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 25
  },
  userId: {
    fontSize: 10.5
  }
});
