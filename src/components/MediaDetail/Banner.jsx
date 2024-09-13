import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import { Play } from "lucide-react";
import ImageComponent from "../Image";
import { useModalContext } from "../../context/ModalProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const { openPopup } = useModalContext();
  //import thu vien lodash
  const groupedCrews = groupBy(crews, "job");
  if (!title) {
    return null;
  }
  return (
    <div className="relative text-white overflow-hidden shadow-sm shadow-slate-600 bg-black">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt=""
        className="absolute inset-0 brightness-[0.2] w-full aspect-video"
        width={1200}
        height={800}
      />
      <div className="flex relative max-w-screen-xl mx-auto px-6 py-10 gap-6 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`}
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="font-bold mb-2 text-[2vw]">{title}</p>
          <div className="flex gap-4 items-center">
            <span className="text-gray-400 border border-gray-400 p-1 ">
              {certification}
            </span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="flex mt-4 items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10)}
                size={3.5}
                stockeWidth={0.3}
                strokeColor={
                  point >= 7 ? "green" : point >= 5 ? "orange" : "red"
                }
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  />
                );
              }}
              className="flex "
            >
              <Play className="mr-1" />
              Trailer
            </button>
          </div>
          <div>
            <p className="font-bold text-[1.vw] mb-2">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
