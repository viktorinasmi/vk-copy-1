import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

export const Card = ({ children }: ICard) => {
  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        padding: 2,
        marginTop: 3,
      }}
    >
      {children}
    </Box>
  );
};
