import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full mx-auto text-center">
        <hr className="border border-slate-900 my-3" />
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Overwatch Coder | Privacy
          Policy | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
