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
        <div className=" md:pl-[90px]">
            <h1 className="text-white text-2xl sm:text-3xl ml-[16px] mt-[16px] ">
                Trending
            </h1>
            <div className=" w-full">
                <div className="flex overflow-x-auto sb-none">
                    {filteredMovies.length > 0
                        ? filteredMovies.map((movie) => (
                              <TrendingCard
                                  key={movie.title}
                                  title={movie.title}
                                  type={movie.type}
                                  releaseDate={movie.release_date}
                                  image={movie.image}
                                  ageRating={movie.age_rating}
                                  trailer={movie.trailer}
                              />
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
}
