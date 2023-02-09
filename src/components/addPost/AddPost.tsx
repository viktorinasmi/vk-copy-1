import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, KeyboardEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { addDoc, collection } from "firebase/firestore";

export const AddPost: FC = () => {
  const [content, setContent] = useState<string>("");
  const { user, db } = useAuth();
  const [error, setError] = useState("");

  const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user) {
      try {
        await addDoc(collection(db, "posts"), {
          author: user,
          content,
          createdAt: "10 минут назад",
        });
      } catch (e: any) {
        setError(e);
      }
      setContent("");
    }
  };
  // @ts-ignore
  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <TextField
          variant="outlined"
          label="Расскажи, что у тебя нового"
          InputProps={{
            sx: {
              borderRadius: "25px",
              backgroundColor: "#f9f9f9",
            },
          }}
          sx={{
            width: "100%",
          }}
          onKeyPress={addPostHandler}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Box>
    </>
  );
};
