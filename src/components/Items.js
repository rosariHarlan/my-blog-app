import Blog from "./Blog.js";
import blogData from "../blogData";

const Items = (props) => {
  return (
    <div className="gallery">
      {blogData.map((item) => (
        <Blog key={item.id} img={item.img_url} title={item.title} />
      ))}
    </div>
  );
};

export default Items;
