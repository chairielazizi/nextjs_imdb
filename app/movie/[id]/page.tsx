import AddToFavButton from "@/app/(components)/AddToFavButton";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const MoviePage = async ({ params }: Props) => {
  const { id: movieId } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
  const movie = await response.json();

  if (!response.ok) {
    return (
      <div className="flex flex-col justify-center items-center mt-10 text-xl">
        <h1>Movie details are not available at the moment</h1>
        <p>
          <Link href="/" className="underline hover:text-amber-500">
            Go back to the homepage
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Movie Image"
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="p-2">
          <h2 className="text-xl font-bold">{movie.title || movie.name}</h2>
          <p className="mb-2 text-lg">{movie.overview}</p>
          <p className="mb-2 text-md">
            <span className="font-semibold">Released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-2 text-md">
            <span className="font-semibold">Rating: </span>
            {movie.vote_average}
          </p>
          <p className="mb-2 text-md">
            <span className="font-semibold">Runtime: </span>
            {movie.runtime} minutes
          </p>
          {/* add to fav component */}
          <AddToFavButton
            movieId={movie.id}
            title={movie.title || movie.name}
            image={movie.backdrop_path || movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date || movie.first_air_date}
            voteAverage={movie.vote_average}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
