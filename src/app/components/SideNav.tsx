"use client";
import { navlinks } from "@/utils";
import Profile from "./Profile";
import NavLink from "./NavLink";
import { useNavContext } from "../context/NavProvider";
import { AiOutlineClose } from "react-icons/ai";
import SocialMedia from "./SocialMedia";

const SideNav = () => {
  const { isNavOpen, toggleSideBar, pathname } = useNavContext();

  return (
    <nav
      className={`transition md:w-72 md:z-50 min-h-screen bg-slate-900 flex flex-col items-center mx-auto space-y-5 text-white fixed top-0 left-0 py-5 ${
        isNavOpen ? "w-screen transition z-50" : "w-0 -z-50"
      }`}
    >
      <span
        className="absolute top-5 right-5 md:hidden"
        onClick={toggleSideBar}
      >
        <AiOutlineClose color={"white"} size={30} />
      </span>

      <Profile />
      <div
        className={`flex-col items-center md:flex w-full ${
          isNavOpen ? "flex" : "hidden"
        }`}
      >
        {navlinks.map((item) => (
          <NavLink
            key={item.name}
            name={item.name}
            link={item.link}
            path={pathname}
          />
        ))}
      </div>

      <SocialMedia classes="text-white border-white" />
    </nav>
  );
};

export default SideNav;
