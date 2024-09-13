import { useState } from "react";
import ActorInfor from "./ActorInfor";

const ActorList = ({ actors = [] }) => {
    const [isShowMore, setIsShowMore] = useState(false)
    const currentActors = isShowMore ? actors.slice(0,32) : actors.slice(0,4)
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {currentActors.map((actor) => (
          <ActorInfor
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profile_path = {actor.profile_path}
            episodeCount = {actor.episodeCount}
          />
        ))}
      </div>
      <p onClick={()=>setIsShowMore(!isShowMore)} className="cursor-pointer mt-2">{isShowMore ? `Show Less` : `Show More`}</p>
    </div>
  );
};

export default ActorList;
