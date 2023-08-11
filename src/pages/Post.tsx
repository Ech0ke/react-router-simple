import { useLoaderData, LoaderFunctionArgs } from "react-router";
import { getPost } from "../helpers/api/getPost";
import { PostType } from "../types/postType";

async function loader(args: LoaderFunctionArgs) {
  const { signal } = args.request;
  const params = args.params as { postId: string };
  return getPost(params.postId, { signal });
}

function Post() {
  const post = useLoaderData() as PostType;
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <a href="user.html">Leanne Graham</a>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Eliseo@gardner.biz</div>
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
            quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
            accusantium
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Jayne_Kuhic@sydney.com</div>
            est natus enim nihil est dolore omnis voluptatem numquam et omnis
            occaecati quod ullam at voluptatem error expedita pariatur nihil
            sint nostrum voluptatem reiciendis et
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Nikita@garfield.biz</div>
            quia molestiae reprehenderit quasi aspernatur aut expedita occaecati
            aliquam eveniet laudantium omnis quibusdam delectus saepe quia
            accusamus maiores nam est cum et ducimus et vero voluptates
            excepturi deleniti ratione
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Lew@alysha.tv</div>
            non et atque occaecati deserunt quas accusantium unde odit nobis qui
            voluptatem quia voluptas consequuntur itaque dolor et qui rerum
            deleniti ut occaecati
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">Hayden@althea.biz</div>
            harum non quasi et ratione tempore iure ex voluptates in ratione
            harum architecto fugit inventore cupiditate voluptates magni quo et
          </div>
        </div>
      </div>
    </>
  );
}

export const postRoute = {
  loader,
  element: <Post />,
};
