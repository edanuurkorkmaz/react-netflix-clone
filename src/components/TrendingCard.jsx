export default function TrendingCard({
    title,
    image,
    type,
    ageRating,
    releaseDate,
}) {
    return (
        <div className=" p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl  ">
            <div className="relative w-72 rounded-lg overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover transition-transform duration-300 hover:brightness-75 hover:scale-110"
                    src={image}
                    alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-all duration-300">
                    <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-white">
                        <span>{releaseDate}</span>
                        <span>•</span>
                        <img
                            className="w-4 h-4"
                            src={
                                type === "movie" ? "/movie.svg" : "/series.svg"
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
