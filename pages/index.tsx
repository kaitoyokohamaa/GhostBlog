import { useState, useEffect } from "react";
import Head from "next/head";
import { client } from "./client";

export default function Home() {
  useEffect(() => {
    // client
    //   .getEntries()
    //   .then((res) => console.log(res))
    //   .catch(console.error);
    client
      .getEntries()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  });
  return (
    <div className="md:flex bg-white rounded-lg p-24 justify-center">
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://lohas.nicoseiga.jp/thumb/5770776i?"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h2 className="text-lg">かいかい</h2>
          <div className="text-purple-500">JavaScript developer</div>
          <div className="text-gray-600">Twitter: @mj3PBy4ayqxfy14</div>
        </div>
      </figure>
    </div>
  );
}
