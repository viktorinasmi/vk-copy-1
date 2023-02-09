import React, { MouseEvent, useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { IMessage } from "../../addPost/types";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import {
  Alert,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { Card } from "../../card";
import { Send as SendIcon } from "@mui/icons-material";

export const Messages = () => {
  const { user, db } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); //поле для ввода сообщения

  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, "messages"), {
        user,
        message,
      });
    } catch (e: any) {
      setError(e);
    }
    setMessage(""); //чистка поля
  };

  //вывод сообщений с сервера Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
      doc.forEach((d: any) => {
        setMessages((prev) => [d.data(), ...prev]); //фильтр вывода
      });
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Card>
        <List style={{ height: "65vh", overflowY: "auto" }}>
          <ListItem key="1">
            <Grid container style={{ textAlign: "right" }}>
              <Grid item xs={12}>
                <ListItemText
                  style={{ color: "#1976d2" }}
                  primary="Hey man, What's up ?"
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText secondary="09:30" />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="2">
            <Grid container style={{ textAlign: "left" }}>
              <Grid item xs={12}>
                <ListItemText primary="Hey, Iam Good! What about you ?" />
              </Grid>
              <Grid item xs={12}>
                <ListItemText secondary="09:31" />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="3">
            <Grid container style={{ textAlign: "right" }}>
              <Grid item xs={12}>
                <ListItemText
                  style={{ color: "#1976d2" }}
                  primary="Cool. i am good, let's catch up!"
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText secondary="10:30" />
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={1}
            style={{ alignItems: "right", paddingLeft: "24px" }}
          >
            <Fab onClick={addMessageHandler} color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
