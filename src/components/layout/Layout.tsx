import { Header } from "./header";
import React, { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Grid } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
