import axios from "axios";
import { useContext } from "react";
import { MainContext } from "../context/index";

export const useGetData = () => {
  const { setStartUpList } = useContext(MainContext);
  const getStartUpList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/startups");
      setStartUpList(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return { getStartUpList };
};
