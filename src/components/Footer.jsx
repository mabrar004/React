import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 mx-7 md:mx-36 md:items-center md:justify-center">
      <div className="flex gap-3 md:flex-row md:gap-6 md:justify-center">
        <h1 className="md:mx-4">Term of Service</h1>
        <h1 className="md:mx-4">Privacy Policy</h1>
        <h1 className="md:mx-4">Connect with me</h1>
      </div>
      <div className="flex justify-center">
        <h1>&copy; Abrar Ahmed. All rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
