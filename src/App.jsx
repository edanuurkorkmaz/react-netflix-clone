import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar";
import MoviesPage from "./components/MoviesPage";

import BookMark from "./components/BookMark";
import SeriesPage from "./components/SeriesPage";

export default function App() {
    const [page, setPage] = useState(window.location.pathname);
    useEffect(() => {
        const onPopState = () => setPage(window.location.pathname);
        window.addEventListener("popstate", onPopState);

        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    return (
        <>
            <div className="bg-[#10141E]">
                <Navbar setPage={setPage} />
                {page === "/" && <HomePage />}
                {page === "/homepage" && <HomePage />}
                {page === "/movies" && <MoviesPage />}
                {page === "/series" && <SeriesPage />}
                {page === "/bookmark" && <BookMark />}
            </div>
        </>
    );
}
