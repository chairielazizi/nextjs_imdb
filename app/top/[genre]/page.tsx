import Results from "@/app/(components)/Results";

interface Props {
  params: {
    genre: string;
  };
}

const TopGenres = async ({ params }: Props) => {
  const { genre } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "rated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  if (!response.ok) {
    // throw new Error("Failed to fetch trending movies");
    console.log(data);
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default TopGenres;
