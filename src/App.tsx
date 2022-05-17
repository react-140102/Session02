import React, { useState } from "react";
import Posts from "./Component/Posts";
import TaskList from "./Component/TaskList";

function App() {
  const [showPosts, setShowPosts] = useState(true);
  return (
    <div className="container">
      <button
        onClick={() => setShowPosts(!showPosts)}
        className="btn btn-primary"
      >
        Toggle Posts
      </button>
      {showPosts && <Posts></Posts>}
      <TaskList></TaskList>
    </div>
  );
}

export default App;
