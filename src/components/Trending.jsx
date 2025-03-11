import { FileWarning, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

export default function Trending(){
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
                setIsLoading(false);
                setErr("Veriler getirilirken bir hata oluştu!");
                setFilteredMovies([]);
            }
        };
        getMovies();
    }, []);


    useEffect(()=> {
        
      const trendingMovies = movies.filter(movie => movie.trending === true);
      setFilteredMovies(trendingMovies);
    },[movies])

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
    <div>
        <h1 className="text-white">Trending</h1>
        <div className="overflow-hidden w-full">
            <div className="flex overflow-x-auto sb-none">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <TrendingCard 
                            title={movie.title} 
                            type={movie.type} 
                            releaseDate={movie.release_date}
                            image={movie.image} 
                            ageRating={movie.age_rating} 
                        />
                    ))
                ) : null}
            </div>
        </div>
    </div>
);

}
    
