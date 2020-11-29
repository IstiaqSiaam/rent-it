import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import PostScreen from "./src/screens/PostScreen";

import ProfileScreen from "./src/screens/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import NotificationScreen from "./src/screens/NotificationScreen";

const HomeStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></HomeStack.Screen>
      <HomeStack.Screen
      name="Posts"
      component={PostScreen}
      options={{headerShown: false}}
      >
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen
        name="Home"
        component={HomeTabSrceen}
      ></AppDrawer.Screen>
      <AppDrawer.Screen
        name="Profile"
        component={ProfileScreen}
      ></AppDrawer.Screen>
    </AppDrawer.Navigator>
  );
};

const HomeTabSrceen = () => {
  return (
    <HomeTab.Navigator initialRouteName="Home">
      <HomeTab.Screen
        name="Home"
        component={HomeStackScreen}
        tabBarIcon={<AntDesign name="home" size={24} color="black" />}
        
      ></HomeTab.Screen>
      <HomeTab.Screen
        name="Notification"
        component={NotificationScreen}
      ></HomeTab.Screen>
    </HomeTab.Navigator>
  );
};
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.isLoggedIN ? (
              <AppDrawerScreen></AppDrawerScreen>
            ) : (
              <AuthStackScreen></AuthStackScreen>
            )}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
