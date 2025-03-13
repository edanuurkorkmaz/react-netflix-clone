export default function TrendingCard({
    title,
    image,
    type,
    ageRating,
    releaseDate,
}) {
    return (
        <div 
            
             className=" p-6 ">
            <div className="relative w-72 rounded-lg overflow-hidden">
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt="Beyond Earth"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <span>{releaseDate}</span>
                        <span>•</span>
                        <img
                            className="w-4 h-4"
                            src={
                                type === "movie"
                                    ? "./movie.svg"
                                    : "./series.svg"
                            }
                            alt="Movie Icon"
                        />
                        <span> {type === "movie" ? "Movie" : "Series"} </span>
                        <span>•</span>
                        <span>{ageRating}</span>
                    </div>

                    <h3 className="text-white text-lg font-semibold">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
}
