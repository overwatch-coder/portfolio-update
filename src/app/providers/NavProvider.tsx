"use client";
import { usePathname } from "next/navigation";
import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type NavContextType = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
  toggleSideBar: () => void;
};

type NavContextProps = {
  children: ReactNode;
};

export const NavContext = createContext<NavContextType>({
  isNavOpen: false,
  setIsNavOpen: () => false,
  pathname: "",
  toggleSideBar: () => {},
});

const NavProvider = ({ children }: NavContextProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef<string>();

  useEffect(() => {
    if (pathnameRef.current !== undefined && pathnameRef.current !== pathname) {
      setIsNavOpen(false);
    }
    pathnameRef.current = pathname;
  }, [pathname]);

  const toggleSideBar = () => {
    setIsNavOpen((prev) => !prev);
  };

  const values = {
    isNavOpen,
    setIsNavOpen,
    toggleSideBar,
    pathname,
  };

  return <NavContext.Provider value={values}>{children}</NavContext.Provider>;
};

export default NavProvider;

export const useNavContext = () => useContext(NavContext);
