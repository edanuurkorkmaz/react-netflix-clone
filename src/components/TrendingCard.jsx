export default function TrendingCard({title , image ,type, ageRating, releaseDate}) {
    console.log(image);
    
    return (
        
        <div className=" p-6 ">
            
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
                        <img className="w-4 h-4" src="./movie.svg" alt="Movie Icon" />
                        <span>{type}</span>
                        <span>•</span>
                        <span>{ageRating}</span>
                    </div>

                    <h3 className="text-white text-lg font-semibold">
                        {title}
                    </h3>
                </div>

                <button className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:cursor-pointer">
                    <img className="w-5 h-5" src="./kaydet.svg" alt="Bookmark" />
                </button>
            </div>
        </div>
    );
}
