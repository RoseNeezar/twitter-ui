import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full max-w-sm p-4 mx-auto border-b border-gray-200 dark:border-dim-200">
      <div className="flex space-x-4 animate-pulse">
        <div className="w-12 h-12 bg-gray-400 rounded-full" />
        <div className="flex-1 py-1 space-y-4">
          <div className="w-3/4 h-4 bg-gray-400 rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded" />
            <div className="w-5/6 h-4 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
