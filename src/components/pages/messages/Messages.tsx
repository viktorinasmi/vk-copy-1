import React, { MouseEvent, useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { IMessage } from "../../addPost/types";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import {
  Alert,
  Avatar,
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
      //добавление сообщений без бага
      const array: IMessage[] = [];
      doc.forEach((d: any) => {
        array.push(d.data()); //фильтр вывода
      });
      setMessages(array);
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
          {messages.map((msg, idx) => (
            <ListItem key={idx}>
              <Grid
                container
                sx={msg.user._id === user?._id ? { textAlign: "right" } : {}}
              >
                <Grid
                  item
                  style={{ display: "flex" }}
                  xs={12}
                  sx={
                    msg.user._id === user?._id
                      ? { justifyContent: "flex-end" }
                      : { justifyContent: "flex-start" }
                  }
                >
                  <Avatar
                    style={{ width: "30", height: "30" }}
                    src={msg.user.avatar}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    sx={msg.user._id === user?._id ? { color: "#1976d2" } : {}}
                    primary={msg.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary={msg.user.name} />
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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
