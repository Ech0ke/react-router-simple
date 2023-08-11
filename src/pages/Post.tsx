import { useLoaderData, LoaderFunctionArgs } from "react-router";
import { getPost } from "../helpers/api/getPost";
import { PostType } from "../types/postType";
import { getPostComments } from "../helpers/api/getPostComments";
import { CommentType } from "../types/commentType";
import { getUser } from "../helpers/api/getUser";
import { UserType } from "../types/userType";
import { Link } from "react-router-dom";

async function loader(args: LoaderFunctionArgs) {
  const { signal } = args.request;
  const params = args.params as { postId: string };
  const post: PostType = await getPost(params.postId, { signal });
  const comments = await getPostComments(post.id.toString(), {
    signal,
  });
  const user = await getUser(post.userId.toString(), { signal });

  return { post, comments, user };
}

function Post() {
  const { post, comments, user } = useLoaderData() as {
    post: PostType;
    comments: CommentType[];
    user: UserType;
  };
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By:{" "}
        <Link to={`/users/${user.id}`} relative="path">
          {user.name}
        </Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div className="card" key={comment.id}>
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const postRoute = {
  loader,
  element: <Post />,
};
