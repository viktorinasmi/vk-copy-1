import { FC, SyntheticEvent, useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { IUserData } from "./types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

export const Auth: FC = () => {
  const { ga, user } = useAuth();

  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);

  const [error, setError] = useState("");

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    //register
    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {
      //auth
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        error.message && setError(error.message);
      }
    }
    console.log(userData.email, userData.password);

    setUserData({
      email: "",
      password: "",
    });
  };

  //redirect auth

  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            sx={{
              display: "block",
              marginBottom: 3,
            }}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={userData.password}
            sx={{
              display: "block",
              marginBottom: 3,
            }}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
          <ButtonGroup variant="outlined">
            <Button type="submit" onClick={() => setIsRegForm(false)}>
              Auth
            </Button>
            <Button type="submit" onClick={() => setIsRegForm(true)}>
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
    </>
  );
};
