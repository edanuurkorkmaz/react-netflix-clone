import HomePage from "./components/HomePage";
import RecommendedCard from "./components/ReccomendedCard";
import TrendingCard from "./components/TrendingCard";
import RecommendForYou from "./components/RecommendForYou";

export default function App() {
    return (
        <div>
            <HomePage />
            <TrendingCard />
            <RecommendedCard />
            <RecommendForYou />
        </div>
    );
}
