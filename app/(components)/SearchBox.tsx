"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!searchTerm) return;
    router.push(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-5 max-w-6xl mx-auto"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies or TV shows"
        className="w-full h-14 rounded-lg placeholder-gray-500 text-gray-500 bg-transparent dark:text-orange-400"
      />
      <button
        className="text-amber-500 disabled:text-gray-400"
        disabled={searchTerm === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
