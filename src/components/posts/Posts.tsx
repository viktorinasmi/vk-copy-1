import { FC, useEffect, useState } from "react";
import { IPost } from "../addPost/types";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
// @ts-ignore
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { collection, onSnapshot } from "firebase/firestore";
import { initialPosts } from "../pages/home/initialPosts";

export const Posts: FC = () => {
  const { db } = useAuth();
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  //вывод постов с сервера Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (doc) => {
      doc.forEach((d: any) => {
        setPosts((prev) => [...prev, d.data()]);
      });
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {posts.map((post, idx) => (
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: 2,
            marginTop: 3,
          }}
          key={`Post-${idx}`}
        >
          <Link
            key={post.author._id}
            to={`/profile/${post.author._id}}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#111",
              marginBottom: 12,
              marginLeft: 12,
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: 2,
                overflow: "hidden",
                width: 50,
                height: 50,
              }}
            >
              <Avatar
                src={post.author.avatar}
                alt="avatar"
                sx={{
                  width: "48",
                  height: "48",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <div>
              <div style={{ fontSize: 14 }}>{post.author.name}</div>
              <div style={{ fontSize: 14, opacity: "0.6" }}>
                {post.createdAt}
              </div>
            </div>
          </Link>
          <p>{post.content}</p>
          {post.images && post.images.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt={""} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      ))}
    </>
  );
};
