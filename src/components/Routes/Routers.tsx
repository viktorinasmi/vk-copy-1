// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { routes } from "./list";
import { useAuth } from "../../hooks/useAuth";
import { Layout } from "../layout";
import { Auth } from "../pages/auth";

const Routers = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              element={
                <Layout>
                  {route.auth && !user ? <Auth /> : <route.component />}
                </Layout>
              }
              path={route.path}
              key={`roure${route.path}`}
            />
          );
        })}
        {/*<Route component={Error404}/>*/}
      </Routes>
    </Router>
  );
};

export default Routers;
