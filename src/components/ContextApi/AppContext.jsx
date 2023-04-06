import { getAxios } from "CustomAxios/AxiosUtility";
import { createHeaders, getToken, setToken } from "CustomAxios/utility";
import React, { useState, createContext, useEffect } from "react";

export let loginContext = createContext();

const AppContext = ({ children }) => {
  let initialAuthState = { token: "", me: "" };
  let [state, setState] = useState(initialAuthState);

  let getUserData = async token => {
    let header = createHeaders(token);
    let userData = await getAxios("http://localhost:5000/api/v1/auth/me/", {
      header,
    });
    console.log("userDAta", userData);
    return userData;
  };

  let updateUserData = userData => {
    setState({ ...state, me: userData });
  };

  useEffect(() => {
      let tokenObject = getToken();
    if (tokenObject.status) {
      console.log("setting token");
      setToken(tokenObject.token);
      setState({
        ...state,
        token: tokenObject.token,
      });
    }
  }, []);
  return (
    <div>
      <loginContext.Provider value={{ state, updateUserData, getUserData }}>
        {children}
      </loginContext.Provider>
    </div>
  );
};

export default AppContext;
