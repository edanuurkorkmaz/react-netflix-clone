import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

export default function Trending({ movies }) {
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const trendingMovies = movies.filter(
            (movie) => movie.trending === true
        );
        setFilteredMovies(trendingMovies);
    }, [movies]);

    return (

        <div>
            <h1 className="text-white">Trending</h1>
            <div className=" w-full">
                <div className="flex overflow-x-auto sb-none">
                    {filteredMovies.length > 0
                        ? filteredMovies.map((movie) => (
                              <TrendingCard
                                  title={movie.title}
                                  type={movie.type}
                                  releaseDate={movie.release_date}
                                  image={movie.image}
                                  ageRating={movie.age_rating}
                              />
                          ))
                        : null}
                </div>

            </div>
        </div>
    );
}
