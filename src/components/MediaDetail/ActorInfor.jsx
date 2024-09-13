import { Link } from "react-router-dom";
import ImageComponent from "../Image";

const ActorInfor = ({ id, name, character, profile_path, episodeCount }) => {
  return (
    <Link to={`/people/${id}`} className="border border-slate-300 shadow-sm rounded-lg bg-black text-white ">
      <ImageComponent
        className="rounded-lg"
        src={
          profile_path
            ? ` https://media.themoviedb.org/t/p/w276_and_h350_face${profile_path}`
            : "/NoImage.svg"
        }
        width={276}
        height={350}
      />
      <div className="p-3 ">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount <= 1 ? `${episodeCount} Espisode` : `${episodeCount} Espisodes`} </p>}
        {/* <p>18</p> */}
      </div>
    </Link>
  );
};

export default ActorInfor;
