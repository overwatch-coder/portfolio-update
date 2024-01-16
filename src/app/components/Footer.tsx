import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center pb-2">
      <div className="w-full mx-auto text-center">
        <hr className="border border-slate-900 my-3" />
        <p className="text-[10px] md:text-sm flex items-center flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between px-2 md:px-10">
          <span>Copyright © 2023 - {new Date().getFullYear()} Overwatch Coder</span>
          <span>Privacy Policy | All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
