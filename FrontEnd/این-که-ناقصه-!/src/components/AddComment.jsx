import React from "react";
import SelectBox from "./SelectBox";
function AddComment({ name, setName }) {
  const handleCancelComment = () => {
    setName("");
  };

  return (
    <div className="ac-wrapper">
      <h2 className="addCommentTitle">
        {name ? (
          <>Write your comment in response to {name}:</>
        ) : (
          <>Write your comment:</>
        )}
      </h2>
      <form action="" className="form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        {!name && <SelectBox />}
        {/* SelectBox */}
        <textarea
          placeholder="message..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
        {name && <button onClick={handleCancelComment}>Cancel</button>}
        {/* Cancell Button */}
      </form>
    </div>
  );
}

export default AddComment;
