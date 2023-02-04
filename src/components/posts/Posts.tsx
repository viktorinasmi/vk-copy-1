import {FC} from "react";
import {IPost} from "../addPost/types";
import {Avatar, Box, ImageList, ImageListItem} from "@mui/material";
// @ts-ignore
import {Link} from "react-router-dom";


interface IPosts {
    posts: IPost[],
}

export const Posts: FC<IPosts> = ({posts}) => {
    return (
        <>
            {posts.map(post => (
                <Box
                    sx={{
                        border: '1px solid #e2e2e2',
                        borderRadius: '10px',
                        padding: 2,
                        marginTop:3,
                    }}>
                    <Link
                        key={post.author._id}
                        to={`/profile/${post.author._id}}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: '#111',
                            marginBottom: 12,
                            marginLeft: 12,
                        }}>
                        <Box sx={{
                            position: 'relative',
                            marginRight: 2,
                            overflow: 'hidden',
                            width: 50,
                            height: 50,
                        }}>
                            <Avatar
                                src={post.author.avatar}
                                alt="avatar"
                                sx={{
                                    width: '48',
                                    height: '48',
                                    borderRadius: '50%',
                                }}
                            />
                        </Box>
                        <div>
                            <div style={{fontSize: 14}}>{post.author.name}</div>
                            <div style={{fontSize: 14, opacity: '0.6'}}>{post.createdAt}</div>
                        </div>
                    </Link>
                    <p>{post.content}</p>
                    {post.images?.length && (
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {post.images.map(image => (
                                <>
                                    <ImageListItem key={image}>
                                        <img
                                            src={image}
                                            alt={''}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </>
                            ))}
                        </ImageList>
                    )}
                </Box>
            ))}
        </>
    )
}
