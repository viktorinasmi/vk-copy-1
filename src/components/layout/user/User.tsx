import { Avatar, Button, Card, Chip } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";
import { signOut } from "firebase/auth";

export const User = () => {
  const { user, ga } = useAuth();

  return (
    <Card
      variant={"outlined"}
      sx={{
        padding: 1,
        backgroundColor: "#f1f7fa",
        border: "none",
        borderRadius: 3,
        marginBottom: 5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Chip
        avatar={<Avatar alt="avatar" src={user?.avatar} />}
        label={user?.name || "Без имени"}
        variant="outlined"
      />
      <Button variant="outlined" onClick={() => signOut(ga)}>
        Выйти
      </Button>
    </Card>
  );
};
