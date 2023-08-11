import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import PageLoading from "../components/PageLoading";

export function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? (
        <PageLoading>
          <Outlet />{" "}
        </PageLoading>
      ) : (
        <Outlet />
      )}
      <ScrollRestoration />
    </>
  );
}
