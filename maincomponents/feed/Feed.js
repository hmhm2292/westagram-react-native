import React, { Component } from "react";
import { View, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import FeedTop from "./FeedTop";
import FeedImage from "./FeedImage";
import FeedTools from "./FeedTools";
import FeedComment from "./FeedComment";
import feedData from "./feedData";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feeds: feedData
    };
  }
  render() {
    return (
      <FlatList
        data={this.state.feeds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.feed}>
            <FeedTop user={item.user} userIcon={item.userIcon} />
            <FeedImage userFeedImage={item.userFeedImage} />
            <FeedTools />
            <FeedComment
              likes={item.userFeedLikeCount}
              user={item.user}
              description={item.userFeedImageDescription}
              comments={item.userFeedComments}
            />
          </View>
        )}
      />
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  feed: {
    flexDirection: "column"
  }
});
