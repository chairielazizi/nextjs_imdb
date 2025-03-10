import NavbarItem from "./NavbarItem";

const MovieNavbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 items-center justify-center lg:text-xl md:text-lg gap-2 p-2">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="rated" />
    </div>
  );
};

export default MovieNavbar;
