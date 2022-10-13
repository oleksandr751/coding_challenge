import axios from "axios";
import { useContext } from "react";
import { MainContext } from "../context/index";

export const useGetData = () => {
  const { setStartUpList } = useContext(MainContext);
  const getStartUpList = async () => {
    try {
      const response = await axios.get(`api/startups/?all=true`);
      console.log(response);
      setStartUpList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return { getStartUpList };
};
