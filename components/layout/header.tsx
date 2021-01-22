import React from "react";

import Link from "next/link";
export default function header() {
  return (
    <div>
      <header className="p-3 z-10 border-b border-black-200 bg-black w-full top-0 fixed mb-2">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <Link href="/">
              <a className="block" aria-label="トップに移動">
                <p className="text-xl  text-white hover:text-blue-900">
                  Kai Blog
                </p>
              </a>
            </Link>
          </div>

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
      </header>
    </div>
  );
}
