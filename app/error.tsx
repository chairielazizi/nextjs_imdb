"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log("error");
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center mt-10 text-xl">
      <h1>Something went wrong. Please try again.</h1>
      <button
        onClick={() => reset()}
        className="hover:text-amber-500 bg-slate-100 mt-5 p-2 rounded-lg cursor-pointer hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
