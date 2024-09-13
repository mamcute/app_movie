import FeatureMovies from "../components/FeatureMovies/Index";
import MediaList from "../components/MediaList/Index";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/constant";
const HomePage = () => {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
};

export default HomePage;
