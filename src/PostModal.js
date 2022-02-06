import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "@firebase/storage";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SummarizeIcon from "@mui/icons-material/Summarize";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar } from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import { db } from "./firebase";
import InputOption from "./InputOption";
import "./PostModal.css";
import WidgetsButton from "./WidgetsButton";

function PostModal({ handleClick, showModal }) {
  const [editortext, setEditortext] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [shareVideo, setShareVideo] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const user = useSelector(selectUser);
  const storage = getStorage();
  const filePickerRef = useRef(null);
  const switchAssetArea = (area) => {
    setShareImage("");
    setShareVideo("");
    setAssetArea(area);
  };
  const reset = (e) => {
    setEditortext("");
    setShareImage("");
    setShareVideo("");
    setAssetArea("");
    handleClick(e);
  };
  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setShareImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    // const image = e.target.files[0];
    // if (image === "" || image === undefined) {
    //   alert(`Format not supported ${typeof image}`);
    //   // return;
    // }
    // setShareImage(image);
  };

  const handleVideo = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setShareVideo(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const sendPost = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "This post is from the modal",

      message: editortext || "",
      // image: URL.createObjectURL(shareImage),
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    // upload image
    if (shareImage) {
      await uploadString(imageRef, shareImage, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL || "",
        });
      });
    }
    // Upload video
    const videoRef = ref(storage, `posts/${docRef.id}/image`);

    if (shareVideo) {
      await uploadString(videoRef, shareVideo, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(videoRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          video: downloadURL || "",
        });
      });
    }

    setEditortext("");
    reset(event);
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
                <Avatar sx={{ width: 50, height: 50 }} src={user.photoURL}>
                  {user.email[0].toUpperCase()}
                </Avatar>
                <span>{user.displayName}</span>
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

                {assetArea === "image" ? (
                  <div className="upload_image">
                    <input
                      id="file_image"
                      type="file"
                      name="image"
                      accept="image/jpg,image/jpeg, image/png, image/gif "
                      onChange={handleImage}
                      // ref={filePickerRef}
                      style={{ display: "none" }}
                    />

                    {shareImage && (
                      <div className="image_result">
                        <img
                          src={shareImage}
                          // src={URL.createObjectURL(shareImage)}
                          alt="upload__Image"
                        />

                        <div className="image_hover">
                          <div
                            className="close_delete_image"
                            onClick={() => {
                              setShareImage(null);
                            }}
                          >
                            <CloseIcon
                              sx={{
                                fontSize: 30,
                                color: "white",
                                pointerEvents: "none",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  assetArea === "media" && (
                    <div className="upload_video">
                      <input
                        id="file_video"
                        type="file"
                        name="video"
                        accept="video/mp4, video/m4v,video/avi,video/mov,video/mpg,video/mpeg "
                        onChange={handleVideo}
                        ref={filePickerRef}
                        style={{ display: "none" }}
                      />
                      {shareVideo && (
                        <div className="video_result">
                          <ReactPlayer
                            url={shareVideo}
                            width={"100%"}
                            height={"auto"}
                            controls={true}
                            volume={0.1}
                          />
                          <div className="video_hover">
                            <div
                              className="close_delete_image"
                              onClick={() => {
                                setShareVideo(null);
                              }}
                            >
                              <CloseIcon
                                sx={{
                                  fontSize: 30,
                                  color: "white",
                                  pointerEvents: "none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="modalFooter">
              <div className="modal_userCreation">
                <label
                  htmlFor="file_image"
                  style={{ marginTop: "0px" }}
                  onClick={() => switchAssetArea("image")}
                >
                  <InputOption Icon={AddAPhotoIcon} />
                </label>

                <label
                  htmlFor="file_video"
                  style={{ marginTop: "0px" }}
                  onClick={() => switchAssetArea("media")}
                >
                  <InputOption Icon={SubscriptionsIcon} />
                </label>

                <InputOption Icon={SummarizeIcon} />
                <InputOption Icon={WorkIcon} />
                <InputOption Icon={CelebrationIcon} />
                <InputOption Icon={MoreHorizIcon} />
                <div className="verticalBar"></div>
              </div>
              <div className="modal_button">
                <WidgetsButton title="Cancel" />
                {!editortext.trim() && !shareImage ? (
                  <button disabled={!editortext ? true : false}>Done</button>
                ) : (
                  <button
                    onClick={sendPost}
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
