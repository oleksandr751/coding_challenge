import { createContext } from "react";
import { IStartUpItem } from "../interfaces/index";

interface IMainContext {
  startUpList: IStartUpItem[];
  setStartUpList: any;
}

export const MainContext = createContext<IMainContext>({
  startUpList: [],
  setStartUpList: () => {},
});
