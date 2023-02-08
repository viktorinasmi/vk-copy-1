// @ts-ignore
import { Link } from "react-router-dom";
import { UserItems } from "./UserItems";
import { Menu } from "./menu";
import { User } from "../user";

export const Sidebar = () => {
  return (
    <div>
      <User />
      <UserItems />
      <Menu />
    </div>
  );
};
