import { FileWarning, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import RecommendForYou from "./RecommendForYou";
import Trending from "./Trending";
import Search from "./Search";
import ReccomendedCard from "./ReccomendedCard";

export default function HomePage({ setPage }) {
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await fetch(
                    "https://clonejson.vercel.app/api/movies"
                );
                setIsLoading(false);
                if (!res.ok) {
                    setMovies([]);
                    setErr("Veriler getirilirken bir hata oluştu!");
                    return;
                }
                const data = await res.json();
                setMovies(data);
                setFilteredMovies(data);
            } catch (err) {
                setMovies([]);
                setFilteredMovies([]);
                setIsLoading(false);
                setErr("Veriler getirilirken bir hata oluştu!");
            }
        };
        getMovies();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <Loader2 className="w-12 h-12 text-white  animate-spin" />
            </div>
        );
    }

    if (err) {
        return (
            <div className="bg-red-500 rounded-lg py-2 px-2 mx-5 text-xs">
                <div className="flex items-center text-white gap-2">
                    <FileWarning className="w-4 h-4" />
                    <span> {err} </span>
                </div>
            </div>
        );
    }

    const isInitialMovies = filteredMovies.length === movies.length;

    return (
        <div className="flex flex-col items-center w-full bg-[#10141E] min-h-screen">
            <Search movies={movies} setFilteredMovies={setFilteredMovies} />

            {isInitialMovies && movies.length > 0 ? (
                <div className="w-full">
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Trending movies={movies} />
                    </div>
                    <div className="mt-4">
                        <RecommendForYou movies={movies} />
                    </div>
                </div>
            ) : null}

            {!isInitialMovies && filteredMovies.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {filteredMovies.map((movie) => (
                        <ReccomendedCard
                            key={movie.title}
                            title={movie.title}
                            image={movie.image}
                            type={movie.type}
                            ageRating={movie.age_rating}
                            releaseDate={movie.release_date}
                        />
                    ))}
                </div>
            )}

            {!isInitialMovies && filteredMovies.length === 0 && (
                <p className="text-white text-center mt-4">
                    Aramanıza uygun film bulunamadı.
                </p>
            )}
        </div>
    );
}
