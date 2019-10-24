import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import CommentLikesDescription from "./comment/CommentLikesDescription";
import CommentList from "./comment/CommentList";
import CommentWrite from "./comment/CommentWrite";
import CommentPostButton from "./comment/CommentPostButton";

class FeedComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedComments: this.props.comments,
      newComment: "",
      myId: "food_23"
    };
  }

  handleInputChange = newCommentText => {
    this.setState({ newComment: newCommentText });
  };

  handleOnPress = () => {
    if (this.state.newComment.length > 0) {
      this.setState({
        feedComments: this.state.feedComments.concat({
          id: (this.state.feedComments.length + 1).toString(),
          user: this.state.myId,
          comment: this.state.newComment
        }),
        newComment: ""
      });
    }
  };

  render() {
    return (
      <View>
        <CommentLikesDescription
          description={this.props.description}
          likes={this.props.likes}
          user={this.props.user}
        />

        <CommentList comments={this.state.feedComments} />

        <View style={styles.writeComment}>
          <CommentWrite
            onChangeText={this.handleInputChange}
            newComment={this.state.newComment}
          />
          <CommentPostButton onPress={this.handleOnPress} />
        </View>
      </View>
    );
  }
}

export default FeedComment;

const styles = StyleSheet.create({
  writeComment: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  commentList: {
    height: 50,
    overflow: "scroll"
  }
});
