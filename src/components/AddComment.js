import React, { useState } from "react";
import CommentsList from "./CommentsList";
import NewComment from "./NewComment";

const AddComment = () => {
  // --- Add new comment ---
  const [newComment, setNewComment] = useState([]);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewComment((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  // --- Submit and show all added comments ---
  const [allComments, setAllComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllComments((prev) => [newComment, ...prev]);
    setNewComment({});
  };

  return (
    <div className="commentBox">
      <h2>Leave a Comment!</h2>
      <NewComment
        newComment={newComment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CommentsList allComments={allComments} />
    </div>
  );
};

export default AddComment;
