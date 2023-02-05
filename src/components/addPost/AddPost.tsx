import {Box, TextField} from "@mui/material";
import React, {FC, useState} from "react";
import {IPost, TypeSetState} from "./types";
import {users} from "../layout/sidebar/UserItems/dataUsers";


interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}

export const AddPost:FC<IAddPost> = ({setPosts}) => {
    const [content, setContent] =useState<string>('')

    const addPostHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key ==='Enter')
        setPosts(prev => [ {
            author: users[0],
            content,
            createdAt: '5 минут назад',
        }, ...prev] )
    }
    // @ts-ignore
    return(
        <Box
        sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: 2,
        }}>
            <TextField
                variant="outlined"
                label="Расскажи, что у тебя нового"
                InputProps={{
                    sx:{
                        borderRadius: '25px',
                        backgroundColor: '#f9f9f9'},
                }}
                    sx={{
                    width: '100%',
                }}
                onKeyPress={addPostHandler}
                onChange={e => setContent(e.target.value)}
                value={content}
            />
        </Box>
    )
}
