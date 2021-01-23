import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <div>
      <footer className="p-3 z-10 border-b border-black-200 bg-black sticky bottom-0">
        <div className="flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex text-sm">
            <Link href="/">
              <a
                className="text-xl  text-white hover:text-blue-900"
                aria-label="ホームページに移動"
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className="ml-4 text-xl   text-white hover:text-blue-900 sm:ml-12"
                aria-label="aboutページに移動"
              >
                About
              </a>
            </Link>
          </div>
        </div>
        <div className="flex  items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <a href="https://github.com/kaitoyokohamaa">
            <img
              className="w-12 p-2"
              src="https://user-images.githubusercontent.com/55383786/105038022-2791cb00-5aa2-11eb-84a1-9cc222d56b9e.png"
            />
          </a>
          <a href="https://twitter.com/mj3PBy4ayqxfy14">
            <img
              className="w-12 p-2"
              src="https://user-images.githubusercontent.com/55383786/105038170-514af200-5aa2-11eb-9d02-219d0b6fb6b3.jpg"
            />
          </a>
        </div>
        <p className="text-white text-center">@kaito yokohama</p>
      </footer>
    </div>
  );
}
