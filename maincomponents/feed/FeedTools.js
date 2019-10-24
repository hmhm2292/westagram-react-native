import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const FeedTools = () => {
  return (
    <View style={styles.feedTools}>
      <View style={styles.feedToolsLeft}>
        <TouchableOpacity>
          <Image
            style={styles.like}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-04-512.png"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.comment}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-06-512.png"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.send}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/instagram-18/512/182_Instagram_Sets_Share-128.png"
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image
          style={styles.bookMark}
          source={{
            uri:
              "https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FeedTools;

const styles = StyleSheet.create({
  feedTools: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  feedToolsLeft: {
    flexDirection: "row"
  },
  like: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 5
  },
  comment: {
    width: 23,
    height: 25,
    resizeMode: "contain",
    marginHorizontal: 5
  },
  send: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginLeft: 5
  },
  bookMark: {
    width: 22,
    height: 25,
    resizeMode: "contain"
  }
});
