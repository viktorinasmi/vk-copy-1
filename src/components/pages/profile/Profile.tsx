import { useAuth } from "../../../hooks/useAuth";
import { Card } from "../../card";
import { Avatar } from "@mui/material";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <Card>
      <Avatar src={user?.avatar} />
      <h1>{user?.name}</h1>
    </Card>
  );
};
