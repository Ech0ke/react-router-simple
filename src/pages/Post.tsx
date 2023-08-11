import { useParams } from "react-router";
import { useLoaderData } from "react-router-dom";
import { UserType } from "../types/userType";
import { PostType } from "../types/postType";
function Post() {
  const { postId } = useParams();
  const posts = useLoaderData() as PostType[];
  console.log(posts);

  // const post = posts.find((p) => p.id === Number(postId));
  return <div>Post</div>;
}

export default Post;
