import { Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { IStartUpItem } from "../../interfaces/index";

interface IStartUpCard {
  data: IStartUpItem;
}

const StartupCard: React.FC<IStartUpCard> = ({ data }) => {
  return (
    <Paper
      sx={{
        padding: "6px 16px",
        marginTop: "20px",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">{data.name}</Typography>
      <Typography
        variant="caption"
        style={{ color: "grey" }}
      >{`${data.dateFounded} | ${data.employees} | ${data.totalFunding}$ | ${data.currentInvestmentStage}`}</Typography>
      <Typography variant="caption" style={{ marginTop: "10px" }}>
        {data.shortDescription}
      </Typography>
    </Paper>
  );
};

export default StartupCard;
