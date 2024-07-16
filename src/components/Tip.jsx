const Tip = () => {
  return (
    <div className="bg-teal-800 text-white p-4 m-4 rounded-md">
      <div className="flex items-center mb-2">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-lg font-semibold">INFO</h2>
      </div>
      <ul className="list-disc list-inside">
        <li className="mt-1">
          After uploading image if it is keep showing{" "}
          <code className="text-black mx-2">Uploading image</code> in right
          corner, try reloading the website.{" "}
        </li>
        <li className="mt-1">
          It is because sometimes it takes time to turn on the server.
        </li>
      </ul>
    </div>
  );
};

export default Tip;
