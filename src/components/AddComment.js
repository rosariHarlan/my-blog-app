import React, { useState } from "react";
import CommentsList from "./CommentsList";
import NewComment from "./NewComment";

const AddComment = () => {
  const [newComment, setNewComment] = useState([]);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewComment((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allComments, setAllComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!newComment.name) return;
    setAllComments((prev) => [newComment, ...prev]);
    setNewComment({});
  };

  return (
    <div>
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
