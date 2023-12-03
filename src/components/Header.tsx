import React from "react";

export default function Header() {
  return (
    <header className="fixed p-4 flex items-center z-10 mix-blend-difference justify-end top-0 left-0 right-0">
      <button data-sticky className="p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </header>
  );
}
