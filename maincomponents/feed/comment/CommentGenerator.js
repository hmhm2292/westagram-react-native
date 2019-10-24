import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class CommentGenerator extends Component {
  render() {
    return (
      <View style={styles.comment}>
        <Text style={styles.user}>{this.props.user}</Text>
        <Text>{this.props.comment}</Text>
      </View>
    );
  }
}

export default CommentGenerator;

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    marginLeft: 10,
    flexWrap: "wrap"
  },
  user: {
    fontWeight: "500",
    marginRight: 10
  }
});
