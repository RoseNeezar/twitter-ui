import React from "react";
import RightPanelFollow from "./components/RightPanelFollow";
import RightPanelSearch from "./components/RightPanelSearch";
import RightPanelTrending from "./components/RightPanelTrending";

const RightPanel = () => {
  return (
    <div className="hidden h-screen md:block w-290 lg:w-350">
      <div className="fixed flex flex-col h-screen overflow-y-auto w-290 lg:w-350">
        {/* Search */}
        <RightPanelSearch />
        {/* /Search */}
        {/* What’s happening */}
        <RightPanelTrending />
        {/* /What’s happening */}
        {/* Who to follow */}
        <RightPanelFollow />
        {/* /Who to follow */}
      </div>
    </div>
  );
};

export default RightPanel;
