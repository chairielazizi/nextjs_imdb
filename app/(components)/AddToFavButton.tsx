"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  movieId: string;
  title: string;
  image: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
};

const AddToFavButton = ({
  movieId,
  title,
  image,
  overview,
  releaseDate,
  voteAverage,
}: Props) => {
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (isLoaded && isSignedIn && user) {
      // setIsFav(user.publicMetadata?.favs?.includes(movieId));
      // const favs = user.publicMetadata?.favs as string[]; // add type annotation
      // setIsFav(favs.includes(movieId));
      if (user.publicMetadata && user.publicMetadata.favourites) {
        setIsFav(
          (user.publicMetadata?.favourites as string[]).includes(
            movieId.toString()
          )
        );

        // console.log(user.publicMetadata.favourites);
        // console.log("MovieId", movieId);
      }
      // console.log("isFav set ke tak", isFav);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [movieId, isLoaded, isSignedIn, user]);
  console.log("isFav set ke tak", isFav);

  const handleFavouriteClick = async () => {
    setIsLoading(true);
    if (!isSignedIn) {
      setIsLoading(false);
      router.push("/sign-in");
      return;
    }
    try {
      const response = await fetch("/api/user/favourite", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
          title,
          image,
          overview,
          releaseDate,
          voteAverage,
        }),
      });

      if (response.ok) {
        // await user.reload();
        setIsFav(!isFav);
      } else {
        console.error("Failed to add to favourites");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={isLoading}
        onClick={handleFavouriteClick}
        className={`hover:text-amber-500 hover:bg-slate-700 mt-5 p-2 rounded-lg cursor-pointer ${
          isFav ? "bg-red-400" : "bg-slate-100 "
        }`}
      >
        {isLoading
          ? "Loading..."
          : isFav
          ? "Remove from Favourites"
          : "Add to Favourites"}
      </button>
    </div>
  );
};

export default AddToFavButton;
