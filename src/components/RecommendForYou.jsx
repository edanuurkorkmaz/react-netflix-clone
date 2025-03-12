import ReccomendedCard from "./ReccomendedCard";

export default function RecommendForYou({ movies }) {
    return (
        <div className="bg-[#10141E] p-4">
            <h2 className="text-2xl sm:text-3xl text-white mb-4">
                Recommended For You
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <ReccomendedCard
                        title={movie.title}
                        image={movie.image}
                        type={movie.type}
                        ageRating={movie.age_rating}
                    />
                ))}
            </div>
        </div>
    );

