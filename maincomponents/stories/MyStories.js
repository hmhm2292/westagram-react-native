import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import storiesData from "./storiesData";
import GenerateStories from "./GenerateStories";

class MyStories extends Component {
  constructor() {
    super();
    this.state = {
      myStories: storiesData
    };
  }
  render() {
    const { myStories } = this.state;

    return (
      <View style={styles.storiesList}>
        <FlatList
          horizontal={true}
          data={myStories}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <GenerateStories story={item} />}
        />
      </View>
    );
  }
}

export default MyStories;

const styles = StyleSheet.create({
  storiesList: {
    justifyContent: "center",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10
  }
});
