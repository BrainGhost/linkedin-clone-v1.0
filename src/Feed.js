import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import EventIcon from "@mui/icons-material/Event";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Avatar } from "@mui/material";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Modal from "./Modal";
import Post from "./Post";
import PostModal from "./PostModal";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // firebase-version 9 (latest)
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, []);

  const sendPost = async (event) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "test",
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    }).catch((error) => console.log(error));
    setInput("");
  };

  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    setShowModal(!showModal);
  };
  const user = useSelector(selectUser);
  const [showModal_2, setShowModal_2] = useState("close");

  const handleClick = () => {
    // e.preventDefault();
    // if (e.target !== e.currentTarget) {
    //   return;
    // }

    switch (showModal_2) {
      case "open":
        setShowModal_2("close");
        break;
      case "close":
        setShowModal_2("open");
        break;
      default:
        setShowModal_2("close");
        break;
    }
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div>
          <Avatar sx={{ width: 50, height: 50 }} src={user.photoURL}>
            {user.email[0].toUpperCase()}
          </Avatar>
          <div className="feed_input">
            <button onClick={handleClick} className="search_btn">
              <CreateIcon />
              Start a post
            </button>
          </div>
        </div>

        <div className="feed_inputOptions">
          <InputOption
            OpenModal={openModal}
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9"
          />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>
      {/* Modal here */}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title_option="videooo"
      />
      <PostModal showModal={showModal_2} handleClick={handleClick} />
      <div className="posts">
        <FlipMove>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
