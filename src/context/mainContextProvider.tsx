import React from "react";
import { useState } from "react";
import { MainContext } from "./index";
import { data } from "../data/index";

interface IMainContextProvider {
  children: JSX.Element;
}

const MainContextProvider: React.FC<IMainContextProvider> = ({ children }) => {
  const [startUpList, setStartUpList] = useState(data);
  return (
    <MainContext.Provider value={{ startUpList, setStartUpList }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
