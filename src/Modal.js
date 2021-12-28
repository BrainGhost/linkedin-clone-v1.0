import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import "./Modal.css";
import WidgetsButton from "./WidgetsButton";

function modal({ showModal, setShowModal }) {
  return (
    <>
      {!showModal ? (
        <div className="modal_container">
          <div className="modal_header">
            <h2>Edit your Photo</h2>
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
            <button>Select images to share</button>
          </div>
          <div className="modal_footer">
            <div className="modal_button">
              <WidgetsButton title="Cancel" />
              <button>Done</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default modal;
