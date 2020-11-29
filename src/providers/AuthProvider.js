import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIN, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        isLoggedIN: isLoggedIN,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
