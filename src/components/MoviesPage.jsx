import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReccomendedCard from "./ReccomendedCard";
import { FileWarning } from "lucide-react";

export default function MoviesPage(setPage) {
    const [isMovieType, setIsMovieType] = useState([]);
    const [movies, setMovies] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
            } catch (err) {
                setMovies([]);
                setIsLoading(false);
                setErr("Veriler getirilirken bir hata oluştu!");
            }
        };
        getMovies();
    }, []);

    useEffect(() => {
        const movieType = movies.filter((movie) => movie.type === "movie");
        setIsMovieType(movieType);
    }, [movies]);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
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
    console.log("çalıştı");

    return (
        <div className="bg-[#10141E] p-4 md:pl-[90px]">
            <h2 className="text-2xl sm:text-3xl text-white mb-4">Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isMovieType.length > 0
                    ? isMovieType.map((movie) => (
                          <ReccomendedCard
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
    );
}
