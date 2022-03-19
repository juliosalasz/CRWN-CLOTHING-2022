import { createContext, useEffect, useState } from "react";
import {
  OnAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../util/fireBase/firebaseUtil";

//as the actual value you want to access
export const UserContext = createContext({
  curretnUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [curretnUser, setCurrentUser] = useState(null);
  const value = { curretnUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
