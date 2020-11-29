import React from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";

const CommentCard = (props) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#9ae5e5" }}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "white" }}
          activeOpacity={1}
        />
        <Text h1Style={{ padding: 10 }} h4>
          {props.author}
        </Text>
      </View>

      <Text style={{ fontStyle: "italic" }}> {props.commentTime}</Text>
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        {props.comment}
      </Text>
    </Card>
  );
};

export default CommentCard;