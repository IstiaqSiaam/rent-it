import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  AsyncStorage,
} from "react-native";
import {
  Card,
  Button,
  Input,
  Header,
} from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import {
  getDataJSON,
  setDataJSON,
} from "../functions/AsyncStorageFunctions";
import {PostCard} from "./../components/PostCard";

const HomeScreen = (props) => {
  const [post, setpost] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const input = React.createRef();

  const getPosts = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();

      let posts = [];
      if (keys != null) {
        for (let element of keys) {
          if (element.startsWith("PID")) {
            let post = await getDataJSON(element);

            posts.push(post);
          }
        }
        
        setAllPosts(posts);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "Blog App", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              title:"Log out",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          ></Header>
          <Card>
            <Input
              ref={input}
              placeholder="What's On Your Mind?"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
              onChangeText={function (currentPost) {
                setpost(currentPost);
              }}
            />
            <Button
              title="Post"
              type="outline"
              onPress={function () {
                var pid = Math.floor(Math.random() * 200);
                let newPost = {
                  postID: "PID" + pid,
                  postAuthor: auth.currentUser.name,
                  postBody: post,
                  postTime: "20 november, 2020",
                  like: [],
                  comments: [],
                };

                setDataJSON("PID" + pid, newPost);
                getPosts();
                setpost("");
                input.current.clear();
              }}
            />
          </Card>

          <FlatList
            data={allPosts}
            renderItem={function ({ item }) {
              return (
                <PostCard
                  author={item.postAuthor}
                  title={item.postTime}
                  postBody={item.postBody}
                  postID={item.postID}
                  navigation={props.navigation}
                />
              );
            }}
          ></FlatList>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default HomeScreen;
