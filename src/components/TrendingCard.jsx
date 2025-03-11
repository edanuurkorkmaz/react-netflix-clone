export default function TrendingCard() {
    return (
        <div className="bg-[#10141E] p-6">
            <h2 className="text-3xl text-white mb-4">Trending</h2>
            <div className="relative w-72 rounded-lg overflow-hidden">
                <img
                    className="w-full h-48 object-cover"
                    src=""
                    alt="Beyond Earth"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <span>2019</span>
                        <span>•</span>
                        <img className="w-4 h-4" src="" alt="Movie Icon" />
                        <span>Movie</span>
                        <span>•</span>
                        <span>PG</span>
                    </div>

                    <h3 className="text-white text-lg font-semibold">
                        Beyond Earth
                    </h3>
                </div>

                <button className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:cursor-pointer">
                    <img className="w-5 h-5" src="" alt="Bookmark" />
                </button>
            </div>
        </div>
    );
}
