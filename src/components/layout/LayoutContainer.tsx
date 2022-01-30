import React, { FC } from "react";

const LayoutContainer: FC = ({ children }) => {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-dim-900">
        <div className="container h-screen mx-auto ">
          <div className="flex flex-row justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
