const Blog = (props) => {
  const { title, img } = props;

  return (
    <div className="flex-item">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <button>Read More</button>
    </div>
  );
};

export default Blog;
