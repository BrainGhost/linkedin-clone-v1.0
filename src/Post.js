import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = forwardRef(
  ({ id, post: { name, description, message, photoUrl } }, ref) => {
    return (
      //I can also do Option chaining like post?.name
      <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
          {/* Chnages this will uploaded image */}
          <img src={photoUrl} alt="" />
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
          <InputOption Icon={CommentIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
