import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center pb-2">
      <div className="w-full mx-auto text-center">
        <hr className="border border-slate-900 my-3" />
        <p className="text-[10px] md:text-sm flex items-center justify-between px-2 md:px-10">
          <span>Copyright © {new Date().getFullYear()} Overwatch Coder</span>
          <span>Privacy Policy | All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
