import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import CommentGenerator from "./CommentGenerator";

export class CommentList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.comments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CommentGenerator comment={item.comment} user={item.user} />
          )}
        />
      </View>
    );
  }
}

export default CommentList;
