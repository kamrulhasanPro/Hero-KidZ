import React from "react";

const MyTitle = ({ children, className }) => {
  return (
    <h2 className={`${className} text-2xl font-semibold text-center mb-5`}>
      {children}
    </h2>
  );
};

export default MyTitle;
