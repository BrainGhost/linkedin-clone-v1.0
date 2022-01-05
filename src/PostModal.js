import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SummarizeIcon from "@mui/icons-material/Summarize";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import InputOption from "./InputOption";
import "./PostModal.css";
import WidgetsButton from "./WidgetsButton";

function PostModal({ handleClick, showModal }) {
  const [editortext, setEditortext] = useState("");
  const [shareImage, setShareImage] = useState("");
  const reset = (e) => {
    setEditortext("");
    handleClick(e);
  };
  const handleImage = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Format not supported ${typeof image}`);
    }
    setShareImage(image);
  };
  return (
    <>
      {showModal === "open" && (
        <div className="postModal">
          <div className="modalDiv">
            <div className="modalHeader">
              <h2>Create a Post </h2>
              <div className="close_button" onClick={(event) => reset(event)}>
                <CloseIcon sx={{ fontSize: 30, pointerEvents: "none" }} />
              </div>
            </div>
            <div className="modalBody">
              <div className="modal_userInfo">
                <Avatar sx={{ width: 50, height: 50 }}>A</Avatar>
                <span>BrainGhost</span>
              </div>
              <div className="modal_userEditor">
                <textarea
                  value={editortext}
                  onChange={(e) => {
                    setEditortext(e.target.value);
                  }}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                <div className="modal_image">
                  <input
                    id="upload_image"
                    type="file"
                    accept=".jpg,.jpeg, .png, .gif "
                    onChange={shareImage}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="modalFooter">
              <div className="modal_userCreation">
                <InputOption Icon={AddAPhotoIcon} />
                <InputOption Icon={SubscriptionsIcon} />
                <InputOption Icon={SummarizeIcon} />
                <InputOption Icon={WorkIcon} />
                <InputOption Icon={CelebrationIcon} />
                <InputOption Icon={MoreHorizIcon} />
                <div className="verticalBar"></div>
              </div>
              <div className="modal_button">
                <WidgetsButton title="Cancel" />
                {editortext === "" ? (
                  <button disabled={!editortext ? true : false}>Done</button>
                ) : (
                  <button
                    style={{
                      opacity: 1,
                      cursor: "pointer",
                      pointerEvents: "auto",
                    }}
                  >
                    Done
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModal;
