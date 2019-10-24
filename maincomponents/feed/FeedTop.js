import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export class FeedTop extends Component {
  render() {
    return (
      <View style={styles.feedTop}>
        <View style={styles.userGroup}>
          <Image
            style={styles.userIcon}
            source={{
              uri: this.props.userIcon
            }}
          />
          <Text style={styles.userId}>{this.props.user}</Text>
        </View>
        <Image
          style={styles.optionIcon}
          source={{
            uri:
              "https://icon-library.net/images/3-dots-icon/3-dots-icon-24.jpg"
          }}
        />
      </View>
    );
  }
}

export default FeedTop;

const styles = StyleSheet.create({
  feedTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6
  },
  userGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  userIcon: {
    height: 36,
    width: 36,
    resizeMode: "contain",
    borderRadius: 18
  },
  userId: {
    fontWeight: "500",
    marginLeft: 4
  },
  optionIcon: {
    height: 12,
    width: 12,
    resizeMode: "contain"
  }
});
