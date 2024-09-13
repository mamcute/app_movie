import Loading from "../Loading";
import MovieCard from "../MovieCard";

const RelatedMediaList = ({ mediaList = [], isLoading, title }) => {
  return (
    <div>
      {title && <p className="font-bold text-[1.4vw] mb-4 mt-6 ">{title}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
