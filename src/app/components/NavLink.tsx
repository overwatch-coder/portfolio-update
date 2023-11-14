import Link from "next/link";

type NavLinkProps = {
  name: string,
  link: string,
  path: string,
}

const NavLink = ({ name, link, path }: NavLinkProps) => {
  return (
    <Link
      href={link}
      key={name}
      className={`w-full flex items-center py-3 space-y-5 justify-center hover:bg-slate-700 ${
        path === link ? "bg-slate-700" : ""
      }`}
    >
      <span className="uppercase text-sm md:text-base">{name}</span>
    </Link>
  );
};

export default NavLink;
