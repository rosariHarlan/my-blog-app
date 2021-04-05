import { useParams, Link } from "react-router-dom";
import blogData from "../blogData";

const Details = () => {
  let { id } = useParams();
  const index = blogData.find((x) => x.id === Number(id));
  return (
    <div>
      <div className="details">
        <p>
          <Link to="/blog">&lt; back</Link>
        </p>
        <img src={index.img_url} alt={index.title} />
        <div>
          <h3>{index.title}</h3>
          <p>{index.published_date}</p>
        </div>
        <p>{index.description}</p>
        <p> By {index.author}</p>
      </div>
    </div>
  );
};

export default Details;
