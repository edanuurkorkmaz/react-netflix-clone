import HomePage from "./components/HomePage";
import RecommendedCard from "./components/ReccomendedCard";
import TrendingCard from "./components/TrendingCard";
import RecommendForYou from "./components/RecommendForYou";
import Trending from "./components/Trending";

export default function App() {
    return (
        <div className="bg-[#10141E]">
            <HomePage />
         
            <Trending/>
            <RecommendedCard />
            <RecommendForYou />
        </div>
    );
}
