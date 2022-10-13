import React from "react";
import StartupCard from "./StartupCard";
import { useEffect, useContext } from "react";
import { useGetData } from "../../hooks/useGetData.hook";
import { MainContext } from "../../context/index";

const StartupList: React.FC = () => {
  const { getStartUpList } = useGetData();
  const { startUpList } = useContext(MainContext);
  useEffect(() => {
    getStartUpList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {startUpList.map((startUpItem) => (
        <StartupCard data={startUpItem} key={startUpItem.id} />
      ))}
    </>
  );
};

export default StartupList;
