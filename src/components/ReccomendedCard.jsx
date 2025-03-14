import { useState, useEffect } from "react";

export default function ReccomendedCard({
    title,
    image,
    type,
    ageRating,
    onToggle,
    releaseDate,
}) {
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const checkBookmarkedStatus = () => {
            const savedItems =
                JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
            const bookmarked = savedItems.some((item) => item.title === title);
            setIsBookmarked(bookmarked);
        };

        checkBookmarkedStatus();
    }, [title]);

    const handleToggleBookmark = () => {
        const savedItems =
            JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
        let updatedItems;

        if (isBookmarked) {
            updatedItems = savedItems.filter((item) => item.title !== title);
        } else {
            updatedItems = [...savedItems, { title, image, type, ageRating }];
        }

        localStorage.setItem("bookmarkedItems", JSON.stringify(updatedItems));
        setIsBookmarked(!isBookmarked);

        if (onToggle) {
            onToggle(updatedItems);
        }
    };

    return (
        <div className="bg-[#10141E] p-2 rounded-lg w-full max-w-[220px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#1C2533]">
            <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[220px] xl:h-[250px] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl ">
                <img
                    src={image}
                    alt="Scenic view"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <button
                    className="absolute top-2 right-2 p-1 hover:bg-black/70 hover:rounded-lg hover:cursor-pointer transition"
                    onClick={handleToggleBookmark}
                >
                    <img
                        src={isBookmarked ? "/marked.svg" : "/kaydet.svg"}
                        alt="Save"
                        className="w-5 h-5"
                    />
                </button>
            </div>
            <div className="mt-2 text-gray-300 text-xs sm:text-sm transition-colors duration-300 hover:text-white">
                <div className=" flex flex-row items-center gap-[14px] text-sm ">
                    <span>{releaseDate} </span>

                    <span>•</span>
                    <div className="flex items-center gap-[8px]">
                        <img
                            className="w-3 h-3"
                            src={
                                type === "movie" ? "/movie.svg" : "/series.svg"
                            }
                            alt=""
                        />
                        <span>{type === "movie" ? "Movie" : "Series"}</span>
                    </div>
                    <span>•</span>
                    <span>{ageRating}</span>
                </div>
                <h5 className="text-white text-sm sm:text-base font-semibold mt-1">
                    {title}
                </h5>
            </div>
             
        </div>
    );
}
