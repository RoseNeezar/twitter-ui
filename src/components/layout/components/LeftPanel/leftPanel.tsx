import React from "react";
import LeftPanelBtmBtn from "./components/leftPanelBtmBtn";
import LeftPanelLogo from "./components/leftPanelLogo";
import LeftPanelNav from "./components/leftPanelNav";

const LeftPanel = () => {
  return (
    <div className="h-screen w-68 xs:w-88 xl:w-275">
      <div className="fixed flex flex-col h-screen overflow-y-auto xl:pr-3 w-68 xs:w-88 xl:w-275">
        {/* Logo */}
        <LeftPanelLogo />
        {/* /Logo */}
        {/* Nav */}
        <LeftPanelNav />
        {/* /Nav */}
        {/* User Menu */}
        <LeftPanelBtmBtn />
        {/* /User Menu */}
      </div>
    </div>
  );
};

export default LeftPanel;
