import { Box } from "@mui/material";
import { AddPost } from "../../addPost";
import { Posts } from "../../posts";

export const Home = () => {
  return (
    <Box>
      <AddPost />
      <Posts />
    </Box>
  );
};
