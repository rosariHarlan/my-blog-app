import blogData from "../blogData";
import Details from "./Details";
import { useParams, Link } from "react-router-dom";

const Blog = (props) => {
  const { title, img } = props;
  let { id } = useParams();

  return (
    <div className="grid-item">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <div className="button">
        <Link to="/blog/:id">Read More</Link>
      </div>
    </div>
  );
};

export default Blog;
