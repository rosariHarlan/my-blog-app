const CommentsList = (props) => {
  const { allComments } = props;
  return (
    <div>
      {allComments.map(({ name, comment, id }) => (
        <div className="newComment" key={id}>
          <p>{name}</p>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
