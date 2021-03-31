const Details = (props) => {
  const { title, img, date, author, description } = props;
  return (
    <div>
      <p>&lt; back</p>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <p>{description}</p>
      <p>{author}</p>
    </div>
  );
};

export default Details;
