import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class FeedImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Image
        style={styles.feedImage}
        source={{
          uri: this.props.userFeedImage
        }}
      />
    );
  }
}

export default FeedImage;

const styles = StyleSheet.create({
  feedImage: {
    resizeMode: "contain",
    width: "100%",
    height: 375,
    backgroundColor: "#efefef"
  }
});
