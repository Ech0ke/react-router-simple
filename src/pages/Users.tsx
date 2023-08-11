import { useLoaderData, Link } from "react-router-dom";
import { UserType } from "../types/userType";
import axios from "axios";
import { GET_USERS } from "../../api/urls/apiUrls";

async function loader({
  request: { signal },
}: {
  request: { signal: AbortSignal };
}): Promise<UserType[]> {
  const res = await axios.get(GET_USERS, { signal });
  return res.data;
}

function Users() {
  const users = useLoaderData() as UserType[];
  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>
                <span className="bold">Company name: </span>
                {user.company.name}
              </div>
              <div>
                <span className="bold">Website: </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://${user.website}`}
                >
                  {user.website}
                </a>
              </div>
              <div>
                <span className="bold">Email: </span>
                {user.email}
              </div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={user.id.toString()}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const usersRoute = {
  loader,
  element: <Users />,
};
