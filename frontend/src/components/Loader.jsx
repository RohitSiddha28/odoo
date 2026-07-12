const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-gray-600 text-lg font-medium">
        {text}
      </p>
    </div>
  );
};

export default Loader;
