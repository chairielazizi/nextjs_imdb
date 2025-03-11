"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Results from "../(components)/Results";

interface FavouriteResult {
  movieId: string;
  title: string;
  image: string;
  description: string;
  dateReleased: string;
  rating: number;
}

const Favourites = () => {
  const [results, setResults] = useState<FavouriteResult[]>([]);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch("/api/user/getFavourite", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResults(data.favourites);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (isLoaded && isSignedIn && user) fetchFavourites();
  }, []);

  if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center pt-6 text-xl">
          Please sign in to view your favourites
        </h1>
      </div>
    );
  }
  return (
    <div>
      {!results ||
        (results.length === 0 && (
          <h1 className="text-center pt-6 text-xl">No results found</h1>
        ))}
      {results && results.length !== 0 && (
        <Results
          results={results.map((result) => ({
            ...result,
            id: result.movieId,
            title: result.title,
            backdrop_path: result.image,
            overview: result.description,
            release_date: result.dateReleased?.substring(0, 10),
            vote_count: result.rating,
            name: "",
            first_air_date: "",
            poster_path: "",
          }))}
        />
      )}
    </div>
  );
};

export default Favourites;
