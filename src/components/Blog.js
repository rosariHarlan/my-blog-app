import { Link } from "react-router-dom";

const Blog = (props) => {
  const { title, img, index } = props;
  return (
    <div className="grid-item" index={index}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <div className="button">
        <Link to={`/blog/${index}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Blog;
