import ImageComponent from "../Image";
import CircularProgressBar from "../CircularProgressBar";
import { useState } from "react";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false)
    const currentSeasons = isShowMore ? seasons : seasons.slice(0,4)
  return (
    <div className="text-[1.3vw] mt-8">
      <p className="font-bold text-[1.4vw] mb-4">Sessons</p>
      {currentSeasons.map((season) => (
        <div
          key={season.id}
          className="flex gap-4 p-3 rounded-lg border border-slate-200 shadow-md mt-4"
        >
          <ImageComponent
            width={130}
            height={195}
            src={`https://media.themoviedb.org/t/p/w300${season.poster_path}`}
            className="h-[195px] w-1/4 rounded-lg"
          />

          <div className="space-y-1">
            <p className="font-bold text-[1.4vw] ">{season.name}</p>
            <div className="flex items-center gap-2">
              <p className="font-bold">Rating</p>
              <CircularProgressBar
                percent={Math.round(season.vote_average * 10)}
                size={2.5}
                stockeWidth={0.2}
              />
            </div>
            <p>
              <span className="font-bold"> Release Date: </span>{" "}
              {season.air_date}
            </p>
            <p>{season.episode_count} Episodes</p>
            <p>{season.overview}</p>
          </div>
        </div>
      ))}
      <p onClick={()=>setIsShowMore(!isShowMore)} className="cursor-pointer mt-2">{isShowMore ? `Show Less` : `Show More`}</p>
    </div>
  );
};

export default SeasonList;
