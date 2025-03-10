"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: NavbarItemProps) => {
  const genre = usePathname().split("/")[2];
  return (
    <div>
      <Link
        href={`/top/${param}`}
        className={`hover:bg-gray-700 hover:text-amber-500 gap-2 p-2 font-semibold  ${
          genre && genre === param
            ? "underline underline-offset-8 decoration-2 decoration-amber-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
