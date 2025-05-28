import React from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment name={name} setName={setName} />
      <Comments setName={setName} />
    </div>
  );
}

export default App;
