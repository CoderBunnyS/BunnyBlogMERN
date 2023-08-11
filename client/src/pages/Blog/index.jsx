import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Info {id} </h1>
    </div>
  );
}

export default Blog;
