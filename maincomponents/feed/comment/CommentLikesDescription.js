import React from "react";
import { View, Text, StyleSheet } from "react-native";

class CommentLikesDescription extends React.Component {
  render() {
    return (
      <View style={styles.likesAndDescription}>
        <Text style={styles.likeCount}>{this.props.likes}</Text>
        <View style={styles.desciption}>
          <Text style={styles.userId}>{this.props.user}</Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

export default CommentLikesDescription;

const styles = StyleSheet.create({
  likesAndDescription: {
    marginLeft: 10,
    marginBottom: 3
  },
  likeCount: {
    fontWeight: "500"
  },
  desciption: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  userId: {
    marginRight: 5,
    fontWeight: "500"
  }
});
