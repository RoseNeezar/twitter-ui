import React from "react";

const RightPanelTrending = () => {
  return (
    <div className="m-2 bg-gray-50 dark:bg-dim-700 rounded-2xl">
      <h1 className="p-3 font-bold text-gray-900 border-b border-gray-200 dark:text-white text-md dark:border-dim-200">
        What’s happening
      </h1>
      {/* Trending Topic */}
      <div className="p-3 text-sm font-normal text-blue-400 transition ease-in-out border-b border-gray-200 cursor-pointer dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 duration-350">
        <h2 className="font-bold text-gray-800 text-md dark:text-white">
          #FreePS5Monday
        </h2>
        <p className="text-xs text-gray-400">29.7K Tweets</p>
      </div>
      {/* /Trending Topic */}
      {/* Trending Topic */}
      <div className="p-3 text-sm font-normal text-blue-400 transition ease-in-out border-b border-gray-200 cursor-pointer dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 duration-350">
        <h2 className="font-bold text-gray-800 text-md dark:text-white">
          #BTSonGMA
        </h2>
        <p className="text-xs text-gray-400">351K Tweets</p>
      </div>
      {/* /Trending Topic */}
      {/* Trending Topic */}
      <div className="p-3 text-sm font-normal text-blue-400 transition ease-in-out border-b border-gray-200 cursor-pointer dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 duration-350">
        <h2 className="font-bold text-gray-800 text-md dark:text-white">
          #AstraZeneca
        </h2>
        <p className="text-xs text-gray-400">52.7K Tweets</p>
      </div>
      {/* /Trending Topic */}
      <div className="p-3 text-sm font-normal text-blue-400 transition ease-in-out cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 duration-350">
        Show more
      </div>
    </div>
  );
};

export default RightPanelTrending;
