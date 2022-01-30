import React from "react";
import MiddlePanelInput from "./components/MiddlePanelInput";
import MiddlePanelLoadMore from "./components/MiddlePanelLoadMore";
import MiddlePanelNav from "./components/MiddlePanelNav";
import MiddlePanelPost from "./components/MiddlePanelPost";

const MiddlePanel = () => {
  return (
    <div className="w-full h-screen border-l border-r border-gray-200 sm:w-600 dark:border-dim-200">
      {/* Header */}
      <MiddlePanelNav />
      {/* /Header */}
      {/* Post Tweet */}
      <MiddlePanelInput />
      {/* /Post Tweet */}
      {/* Timeline */}
      {/* New Tweets */}
      <MiddlePanelLoadMore />
      {/* /New Tweets */}
      {/* Tweet */}
      <MiddlePanelPost />
      {/* /Tweet */}
    </div>
  );
};

export default MiddlePanel;
