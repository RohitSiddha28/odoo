import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white">
        Save
      </button>
    </div>
  );
};

export default PageHeader;