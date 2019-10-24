import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export class CommentPostButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>Post</Text>
      </TouchableOpacity>
    );
  }
}

export default CommentPostButton;
