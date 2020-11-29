import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { setDataJSON } from "../functions/AsyncStorageFunctions";

const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [sID, setSID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to the blogg</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={
            <MaterialIcons name="account-circle" size={24} color="black" />
          }
          placeholder="Name"
          onChangeText={function (currentInput) {
            setName(currentInput);
          }}
        />
        <Input
          leftIcon={
            <MaterialIcons name="account-balance" size={24} color="black" />
          }
          placeholder="Student ID"
          onChangeText={function (currentInput) {
            setSID(currentInput);
          }}
        />
        <Input
          leftIcon={<MaterialIcons name="email" size={24} color="black" />}
          placeholder="Email Address"
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        />
        <Input
          leftIcon={<MaterialIcons name="lock" size={24} color="black" />}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setPassword(currentInput);
          }}
        />
        <Button
          icon={<MaterialIcons name="lock-open" size={24} color="black" />}
          title="Sign Up"
          type="solid"
          onPress={
            function(){
              let newuser={
                name:name,
                sID:sID,
                email:email,
                password:password
              };
              setDataJSON(email,newuser);
              props.navigation.navigate("SignIn");
              alert("new user created");
            }
          }
        />
        <Button
          icon={<MaterialIcons name="lock-open" size={24} color="green" />}
          title="Already have an account? Sign In!"
          type="outline"
          onPress={function () {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6600dd",
  },
});

export default SignUpScreen;
