import React, { useState } from "react";

const AddComment = () => {
  // --- Add new comment ---
  const [newComment, setNewComment] = useState([]);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewComment((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  // --- Submit new and show all added comments ---
  const [allComments, setAllComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllComments((prev) => [newComment, ...prev]);
    setNewComment({});
  };

  return (
    <div>
      <div className="commentBox">
        <h2>Leave a Comment!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={newComment.name || ""}
            onChange={handleChange}
          />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="7"
            placeholder="Add Your Comment"
            value={newComment.comment || ""}
            onChange={handleChange}
          />
          <input type="submit" value="Post Comment" />
        </form>
      </div>
      <div>
        {allComments.map(({ name, comment, id }) => (
          <div className="newComment" key={id}>
            <p>{name}</p>
            <p>{comment}</p>
          </div>
        ))}
      </div>
      {/* <NewComment
        newComment={newComment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}

      {/* <CommentsList allComments={allComments} /> */}
    </div>
  );
};

export default AddComment;
