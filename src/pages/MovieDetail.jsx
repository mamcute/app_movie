import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import MovieInformation from "../components/MediaDetail/MovieInformation";
import useFetch from "../hooks/useFetch";
const MovieDetail = () => {
  //useParams dung de lay id
  const { id } = useParams();

  const { isLoading, data: movieInfo } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { isLoading: isRelatedLoading, data: recommendationsResponse } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });
  const relatedMovies = (recommendationsResponse.results || []).slice(0, 12);
  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US"
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;
  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        releaseDate={movieInfo.release_date}
        genres={movieInfo.genres}
        point={movieInfo.vote_average}
        overview={movieInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer"
          )?.key
        }
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className=" mx-auto max-w-screen-xl flex px-6 py-10 gap-6 sm:gap-8 ">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovies}
              isLoading={isRelatedLoading}
              title='More like this'
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
