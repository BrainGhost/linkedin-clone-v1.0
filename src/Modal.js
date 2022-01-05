import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "@firebase/storage";
import CloseIcon from "@mui/icons-material/Close";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import { db } from "./firebase";
// import "./Modal.css";
import WidgetsButton from "./WidgetsButton";

function Modal({ showModal, setShowModal, title_option }) {
  const user = useSelector(selectUser);
  const filePickerRef = useRef(null);
  const storage = getStorage();

  //Hnadle saving images for preview
  const [selectedImage, setSelectedImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const addImageToPost = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    console.log(isUploaded);
  };
  const removeImage = () => {
    setIsUploaded(false);
    setSelectedImage("");
  };

  //Saving our images in the firebase
  const sendPostImage = async (event) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "Image post",
      message: "",
      //   imagePost: selectedImage,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    });
    // setInput("");

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedImage) {
      await uploadString(imageRef, selectedImage, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    // setSelectedImage("");
    setShowModal(!showModal);
    removeImage();
  };

  return (
    <>
      {!showModal && (
        <div className="pop_box">
          <div className="modal_container">
            <div className="modal_header">
              <h2>Edit your {title_option}</h2>
              <div className="close_button">
                <CloseIcon
                  sx={{ fontSize: 30 }}
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                />
              </div>
            </div>
            <div className="modal_body">
              {!isUploaded ? (
                <>
                  <button>
                    <label htmlFor="upload_input">Select images to share</label>
                  </button>
                  <input
                    id="upload_input"
                    type="file"
                    accept=".jpg,.jpeg, .png, .gif "
                    onChange={addImageToPost}
                    ref={filePickerRef}
                  />
                </>
              ) : (
                <img src={selectedImage} alt="Uploaded_image" />
              )}
            </div>
            <div className="modal_footer">
              <div className="modal_button">
                <WidgetsButton title="Cancel" RemoveImage={removeImage} />
                {isUploaded ? (
                  <button
                    onClick={sendPostImage}
                    style={{
                      opacity: 1,
                      cursor: "pointer",
                      pointerEvents: "auto",
                    }}
                  >
                    Done
                  </button>
                ) : (
                  <button>Done</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
