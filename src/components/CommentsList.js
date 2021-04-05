const CommentsList = (props) => {
  const { allComments } = props;
  return (
    <div className="commentBox">
      {allComments.map(({ name, comment, id }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
