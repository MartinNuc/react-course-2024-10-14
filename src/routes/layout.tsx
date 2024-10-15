import { Outlet } from "react-router-dom";
import { UserInfoPane } from "../context/user-info-pane";
import { NavBar } from "./navbar";

export function Layout() {
  return <>
    <UserInfoPane />
    <NavBar />

    <Outlet />
  </>
}