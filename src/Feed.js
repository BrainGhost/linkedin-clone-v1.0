import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
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
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";

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
      name: "BrainGhost",
      description: "test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNote} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#FC9295"
          />
        </div>
      </div>

      <div className="posts">
        <FlipMove
          enterAnimation="accordionVertical"
          leaveAnimation="accordionVertical"
        >
          {posts.map((post) => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
