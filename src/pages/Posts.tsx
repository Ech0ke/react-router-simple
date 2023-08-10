import { useLoaderData, Link } from "react-router-dom";
import { PostType } from "../types/postType";

function Posts() {
  const posts = useLoaderData() as PostType[];
  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={post.id.toString()}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
