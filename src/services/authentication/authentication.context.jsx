import React, { useState, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { authentication } from "./authentication.config";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  authentication.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then((ourUser) => {
        setUser(ourUser);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Error: email or password is incorrect");
      });
  };

  const onSignUp = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(authentication, email, password)
      .then((ourUser) => {
        setUser(ourUser);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error : invalid-email");
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(authentication);
    setIsLoading(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onSignUp,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
