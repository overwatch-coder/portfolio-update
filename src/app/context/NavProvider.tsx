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
import { Sugar } from "react-preloaders";

type NavContextType = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

type NavContextProps = {
  children: ReactNode;
};

export const NavContext = createContext<NavContextType>({
  isNavOpen: false,
  setIsNavOpen: () => false,
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

  const values = {
    isNavOpen,
    setIsNavOpen,
  };
  return (
    <NavContext.Provider value={values}>
      <>
        <Sugar
          color={"#ffff"}
          background={
            "linear-gradient(90deg, rgba(9,7,43,1) 30%, rgba(2,16,49,1) 70%)"
          }
        />
        {children}
      </>
    </NavContext.Provider>
  );
};

export default NavProvider;

export const useNavContext = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  const pathname = usePathname();

  const toggleSideBar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return { isNavOpen, toggleSideBar, pathname };
};
