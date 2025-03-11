export default function ReccomendedCard({ title, image, type, ageRating }) {
    return (
        <div className="bg-[#10141E] p-3 rounded-lg w-full max-w-[220px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] mx-auto ">
            <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[220px] xl:h-[250px] rounded-lg overflow-hidden shadow-md ">
                <img
                    src={image}
                    alt="Scenic view"
                    className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 p-1  hover:bg-black/70 hover:rounded-lg  hover:cursor-pointer transition">
                    <img src="/kaydet.svg" alt="Save" className="w-5 h-5" />
                </button>
            </div>

            <div className="mt-2 text-gray-300 text-xs sm:text-sm">
                <div className=" flex flex-row items-center gap-[14px] text-sm ">
                    <span>2019</span>
                    <span>•</span>
                    <div className="flex items-center gap-[2px]">
                        <img
                            className="w-3 h-3"
                            src={
                                type === "movie"
                                    ? "./movie.svg"
                                    : "./series.svg"
                            }
                            alt=""
                        />
                        <span> {type === "movie" ? "Movie" : "Series"} </span>
                    </div>
                    <span>•</span>
                    <span> {ageRating} </span>
                </div>
                <h5 className="text-white text-sm sm:text-base font-semibold mt-1">
                    {title}
                </h5>
            </div>
        </div>
    );
}
