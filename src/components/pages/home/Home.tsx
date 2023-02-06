import {Box} from "@mui/material";
import {AddPost} from "../../addPost";
import {useState} from "react";
import {IPost} from "../../addPost/types";
import {Posts} from "../../posts";
import {initialPosts} from "./initialPosts";


export const Home = () => {
    const [posts, setPosts] = useState<IPost[]>(initialPosts)

    return (
        <Box>
            <AddPost setPosts={setPosts}/>
            <Posts posts={posts}/>
        </Box>
    )
}
