import Link from "next/link";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-3">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="hidden sm:block font-bold">
            Sign in
          </Link>
        </SignedOut>
        <li>
          <Link href="/" className="hidden sm:block">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hidden sm:block">
            About
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <DarkModeButton />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Simple</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
