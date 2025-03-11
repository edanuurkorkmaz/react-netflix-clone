import { FileWarning, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReccomendedCard from "./ReccomendedCard";

export default function RecommendForYou() {
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

}
