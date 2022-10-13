import React from "react";
import StartupCard from "./StartupCard";
import { useEffect, useContext, useState } from "react";
import { useGetData } from "../../hooks/useGetData.hook";
import { MainContext } from "../../context/index";
import { Pagination } from "@mui/material";

const StartupList: React.FC = () => {
  const { getStartUpList } = useGetData();

  const [page, setPage] = useState(0);
  const { startUpList } = useContext(MainContext);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };
  useEffect(() => {
    getStartUpList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {startUpList?.slice(page * 20, page * 20 + 20).map((startUpItem) => (
        <StartupCard data={startUpItem} key={startUpItem.id} />
      ))}
      <Pagination count={10} variant="outlined" onChange={handleChange} />
    </>
  );
};

export default StartupList;
