import React from "react";

function SnackBar({message}) {
  return (
    <div>
      <div className="flex items-start justify-between radius-start p-3 space-x-4 rounded-md bg-black text-white w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="flex-shrink-0 w-6 h-6 my-1"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="flex flex-col flex-1 px-2 space-y-1">
          <span className="text-sm font-semibold">Not Available</span>
          <span className="text-md text-yellow">
            {message}
          </span>
        </div>
        <button
          type="button"
          title="Close snackbar"
          className="dark:border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-4 h-4 my-1"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SnackBar;
