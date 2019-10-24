import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

export class CommentWrite extends Component {
  render() {
    return (
      <View style={styles.commentInput}>
        <Image
          style={styles.userIcon}
          source={{
            uri:
              "https://scontent-icn1-1.cdninstagram.com/vp/ae8b4e447a9151324a749b4627d887d8/5DF50544/t51.2885-19/s320x320/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
          }}
        />

        <TextInput
          defaultValue={this.props.newComment}
          multiline={true}
          style={styles.input}
          placeholder="Add your comment..."
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default CommentWrite;

const styles = StyleSheet.create({
  commentInput: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    maxWidth: 290
  },
  userIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 15,
    marginRight: 5
  }
});
