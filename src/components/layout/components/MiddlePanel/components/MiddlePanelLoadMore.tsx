import React from "react";

const MiddlePanelLoadMore = () => {
  return (
    <div className="py-2 border-b border-l border-r border-gray-200 dark:border-dim-200 bg-gray-50 dark:bg-dim-300">
      <div className="flex items-center justify-center flex-shrink-0 py-4 text-sm text-blue-400 transition ease-in-out bg-white border-t border-b border-gray-200 cursor-pointer dark:bg-dim-900 dark:border-dim-200 hover:bg-gray-50 dark:hover:bg-dim-300 duration-350">
        Show 9 Tweets
      </div>
    </div>
  );
};

export default MiddlePanelLoadMore;
