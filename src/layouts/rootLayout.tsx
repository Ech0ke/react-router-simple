import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
