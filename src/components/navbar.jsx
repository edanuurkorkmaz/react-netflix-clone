import { navigate } from "./helper";

export default function Navbar({ setPage }) {
    return (
        <div className="flex gap-[80px] justify-between p-[16px] items-center bg-[#161D2F] hover:text-white">
            <a href="">
                <img src="./redicon.svg" alt="" />
            </a>

            <div className="flex gap-[24px]">
                <a href="/homepage" className="cursor-pointer" onClick={() => navigate('/homepage', setPage)}>
                <img src="./homepage-icon.svg" alt="Homepage" />
                </a>
            
                <a href="/movies" className="cursor-pointer" onClick={() => navigate('/movies', setPage)}>
                <img src="./movie-icon.svg" alt="Movies" />
                </a>
                <a href="/series" className="cursor-pointer" onClick={() => navigate('/series', setPage)}>
                <img src="./series-icon.svg" alt="Series" />
                </a>
                <a href="/bookmark" className="cursor-pointer" onClick={() => navigate('/bookmark', setPage)}>
                <img src="./bookmark-icon.svg" alt="Bookmark" />
                </a>
                </div>


                <a href="">
                <img src="./men-icon.svg" alt="" />
                </a>
               
        </div>
    );
}
