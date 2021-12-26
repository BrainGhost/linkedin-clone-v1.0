import { Avatar } from "@material-ui/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = forwardRef(
  ({ id, post: { name, description, message, photoUrl } }, ref) => {
    return (
      //I can also do Option chaining like post?.name
      <div ref={ref} className="post">
        <div className="post_header">
          <Avatar />
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
          <img src={photoUrl} alt="" />
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
