import Results from "@/app/(components)/Results";

type Props = {
  params: Promise<{ searchTerm: string }>;
};

const SearchPage = async ({ params }: Props) => {
  const { searchTerm } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  const results = data.results;

  return (
    <div>
      {!results ||
        (results.length === 0 && (
          <h1 className="text-center pt-6 text-xl">No results found</h1>
        ))}
      {results && results.length !== 0 && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
