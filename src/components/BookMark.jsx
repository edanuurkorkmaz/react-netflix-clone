import { useEffect, useState } from "react";
import ReccomendedCard from "./ReccomendedCard";

export default function Bookmark() {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
        setBookmarkedItems(items);
    }, []);

    const handleToggle = (updatedItems) => {
        setBookmarkedItems(updatedItems);
    };

    const movies = bookmarkedItems.filter((item) => item.type === "movie");
    const series = bookmarkedItems.filter((item) => item.type === "series");

    return (
        <div className="bg-[#10141E] min-h-screen p-4 md:pl-[90px]">
            {movies.length > 0 && (
                <>
                    <h2 className="text-white text-xl mb-4">
                        Bookmarked Movies
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                        {movies.map((item, index) => (
                            <ReccomendedCard
                                key={`movie-${index}`}
                                title={item.title}
                                image={item.image}
                                type={item.type}
                                ageRating={item.ageRating}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </>
            )}
            {series.length > 0 && (
                <>
                    <h2 className="text-white text-xl mb-4">
                        Bookmarked TV Series
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {series.map((item, index) => (
                            <ReccomendedCard
                                key={`series-${index}`}
                                title={item.title}
                                image={item.image}
                                type={item.type}
                                ageRating={item.ageRating}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </>
            )}
             
        </div>
    );
}
