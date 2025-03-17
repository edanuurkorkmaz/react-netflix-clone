import { navigate } from "./helper";

export default function Navbar({ setPage }) {
  return (
    <div className="fixed top-0 left-0 w-full flex md:flex-col gap-[80px] md:w-[80px] h-[60px] md:h-screen justify-between md:p-[16px] items-center bg-[#161D2F] hover:text-white md:z-50">
      <a href="" className="md:mb-10 ml-2 md:ml-0 flex-shrink-0">
        <img src="./redicon.svg" alt="" className="w-6 h-6" />
      </a>

      <div className="flex flex-row md:flex-col gap-[24px] md:gap-[30px] items-center flex-grow md:flex-grow-0 ">
        <button
          className="cursor-pointer p-2 rounded-full hover:bg-white/20 flex-shrink-0"
          onClick={() => navigate("/homepage", setPage)}
        >
          <img src="./homepage-icon.svg" alt="Homepage" className="w-6 h-6" />
        </button>

        <button
          className="cursor-pointer p-2 rounded-full hover:bg-white/20 flex-shrink-0"
          onClick={() => navigate("/movies", setPage)}
        >
          <img src="./movie-icon.svg" alt="Movies" className="w-6 h-6" />
        </button>

        <button
          className="cursor-pointer p-2 rounded-full hover:bg-white/20 flex-shrink-0"
          onClick={() => navigate("/series", setPage)}
        >
          <img src="./series-icon.svg" alt="Series" className="w-6 h-6" />
        </button>

        <button
          className="cursor-pointer p-2 rounded-full hover:bg-white/20 flex-shrink-0"
          onClick={() => navigate("/bookmark", setPage)}
        >
          <img src="./bookmark-icon.svg" alt="Bookmark" className="w-6 h-6" />
        </button>
      </div>

      <button className="ml-auto md:ml-0 md:mt-auto cursor-pointer p-2 rounded-full hover:bg-white/20 flex-shrink-0">
        <img src="./men-icon.svg" alt="user" className="w-6 h-6" />
      </button>
    </div>
  );
}
