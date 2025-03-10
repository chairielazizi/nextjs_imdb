import Card from "./Card";

type Props = {
  results: {
    id: string;
    title: string;
    name: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_count: number;
    backdrop_path: string;
    poster_path: string;
  }[];
};

const Results = ({ results }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
