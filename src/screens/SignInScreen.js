import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import { getDataJSON } from "../functions/AsyncStorageFunctions";

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Card>
            <Card.Title>Welcome to the blogg</Card.Title>
            <Card.Divider />
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
              title="Sign In"
              type="solid"
              onPress={async function () {
                let userData = await getDataJSON(email);
                console.log(userData);

                if (userData.password == password) {
                  auth.setIsLoggedIn(true);
                  auth.setCurrentUser(userData);
                } else {
                  alert("wrong.Recheck email and password.");
                }
              }}
            />
            <Button
              icon={<MaterialIcons name="lock-open" size={24} color="green" />}
              title="Dont have an account? Sign Up!"
              type="outline"
              onPress={function () {
                props.navigation.navigate("SignUp");
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#6600dd",
  },
});

export default SignInScreen;
