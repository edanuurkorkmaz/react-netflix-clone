export default function ReccomendedCard({ title }) {
    return (
        <div className="bg-[#10141E]">
            <div className="relative w-[164px] h-[110px] rounded-[8px] overflow-hidden">
                <img
                    src="./recommend.png"
                    alt="Scenic view"
                    className="w-full h-auto"
                />
                <div className="absolute top-2 right-2">
                    <img src="./kaydet.svg" alt="" />
                </div>
            </div>

            <div className="card-content  justify-start text-gray-300">
                <div className=" flex flex-row items-center gap-[14px] ">
                    <p>2019</p>
                    <div className="flex flex-row items-center gap-[2px]">
                        <span>•</span>
                        <span>
                            <img
                                className="bg-black w-[10px] h-[10px]"
                                src="./movie.svg"
                                alt=""
                            />
                        </span>
                        <p>Movie</p>
                    </div>
                    <span>•</span>
                    <p>E</p>
                </div>
                <h5 className="text-white">{title} </h5>
            </div>
        </div>
    );
}
