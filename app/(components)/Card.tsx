import Link from "next/link";
import { IoThumbsUp } from "react-icons/io5";

type Props = {
  result: {
    id: string;
    title: string;
    name: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
  };
};

const Card = ({ result }: Props) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 md:shadow-xl rounded-2xl transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.title || result.name}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300 w-full sm:h-36 object-cover"
        />

        <div className="p-2 sm:p-4">
          <p className="line-clamp-3 text-sm">{result.overview}</p>
          <h2 className="font-bold my-2 ">{result.title || result.name}</h2>
          <p className="flex items-center text-sm">
            {result.release_date || result.first_air_date}
            <IoThumbsUp className="h-6 mr-1 ml-3 text-amber-500" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
