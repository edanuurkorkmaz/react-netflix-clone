import { LucideSearch } from "lucide-react";
import { useEffect, useState } from "react";

export default function Search({ movies, setFilteredMovies }) {
    const searchParams = new URLSearchParams(window.location.search);
    const [filters, setFilter] = useState({
        title: searchParams.get("title") || "",
    });

    useEffect(() => {
        if (!filters.title) {
            setFilteredMovies(movies);
        } else {
            const filteredMoviesAndSeries = movies.filter((movie) =>
                filters.title
                    ? movie.title
                          .toLowerCase()
                          .includes(filters.title.toLowerCase())
                    : movie
            );
            setFilteredMovies(filteredMoviesAndSeries);
        }
    }, [filters, movies, setFilteredMovies]);

    const handleFilterChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFilter({
            ...filters,
            [key]: value,
        });
        if (value) {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }

        if (searchParams.toString()) {
            window.history.pushState({}, "", `?${searchParams.toString()}`);
        } else {
            console.log("search yok");
            window.history.pushState({}, "", "/");
        }
    };

    return (
        <div className="flex  gap-4 text-white p-5 w-full items-center ">
            <LucideSearch className="w-5 h-5" />
            <input
                name="title"
                className="w-full outline-none"
                type="text"
                placeholder="Search for movies or TV series"
                value={filters.title}
                onChange={handleFilterChange}
            />
        </div>
    );
}
