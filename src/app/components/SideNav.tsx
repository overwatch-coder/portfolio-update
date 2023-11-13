import { navlinks } from "@/utils";
import Profile from "./Profile";
import NavLink from "./NavLink";

const SideNav = () => {
  return (
    <header className="flex flex-col mx-auto space-y-5 text-white sticky top-0 left-0 py-5">
      <Profile />
      <nav className="flex flex-col items-center">
        {navlinks.map((item) => (
          <NavLink
            key={item.name}
            name={item.name}
            link={item.link}
          />
        ))}
      </nav>
    </header>
  );
};

export default SideNav;
