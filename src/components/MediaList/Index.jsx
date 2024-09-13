import {  useState } from "react";
import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";

const Index = ({ title, tabs }) => {
  
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const url = tabs.find((tab) => tab.id === activeTabId)?.url;
  const {data } = useFetch({
    url
  })
  const mediaList = (data.results||[]).slice(0, 12);
  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className=" flex border border-white rounded  ">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`px-2 py-1 rounded cursor-pointer ${
                tab.id === activeTabId ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                setActiveTabId(tab.id);
              }}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
        {mediaList.map((media) => (
          <MovieCard
            id={media.id}
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
