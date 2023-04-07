import { createHeaders, getToken, setToken } from "CustomAxios/utility";
import { getAxios } from "CustomAxios/AxiosUtility";

import React, { createContext, useState, useEffect } from "react";

export let BootCampGlobal = createContext();
const BootcampContext = ({ children }) => {
  let initialBootCampState = { bootcamp: "" };
  let [boot, setBoot] = useState(initialBootCampState);

  let getBootCampData = async token => {
    let header = createHeaders(token);
    let bootcampData = await getAxios(
      "http://localhost:5000/api/v1/bootcamps",
      {
        header,
      }
    );
    console.log("alll bootData", bootcampData.data);

    return bootcampData;
  };

  let updateBootcampData = bootcampData => {
    setBoot({ ...boot, bootcamp: bootcampData });
  };

  useEffect(() => {
    // let tokenObject = getToken();
    // if (tokenObject.status) {
    //   console.log("setting token");
    //   setToken(tokenObject.token);
    //   setBoot({
    //     ...boot,
    //     token: tokenObject.token,
    //   });
    // }
    let fetchBootcamp = async () => {
       let boData = await getBootCampData();
       setBoot({
         ...boot,
         bootcamp: boData,
       });
      console.log("boData", boData);
    }
    fetchBootcamp()
   

  }, []);

  return (
    <div>
      <BootCampGlobal.Provider
        value={{ boot, updateBootcampData, getBootCampData }}
      >
        {children}
      </BootCampGlobal.Provider>
    </div>
  );
};

export default BootcampContext;
