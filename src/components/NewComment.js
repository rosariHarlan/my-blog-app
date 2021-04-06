const NewComment = (props) => {
  const { newComment, handleChange, handleSubmit } = props;
  return (
    <div>
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
  );
};

export default NewComment;
