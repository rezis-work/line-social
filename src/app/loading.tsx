import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        <div className="skeleton-create-post h-12 bg-gray-100 dark:bg-gray-800 rounded"></div>
        <div className="space-y-6 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="skeleton-post-card h-24 bg-gray-100 dark:bg-gray-800 rounded"
            ></div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <div className="skeleton-who-to-follow h-48 bg-gray-100 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
};

export default loading;
