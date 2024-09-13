import {  useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../hooks/useFetch";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";

const SeachPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });
  const [searchText, setSearchText] = useState("");
  const [minRating, maxRating] =
    searchFormValues.rating === "All"
      ? [0, 100]
      : searchFormValues.rating.split("-");
  const { data: search } = useFetch({
    url: `/discover/${
      searchFormValues.mediaType
    }?sort_by=popularity.desc&with_genres=${searchFormValues.genres.join(
      ","
    )}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });
  console.log({ search });

  return (
    <div className="container flex-col">
      <p className="font-bold text-[1.4vw]">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3] flex-col flex">
          <input
            type="text"
            placeholder="Search"
            className=" rounded-lg border w-full px-2 focus:outline-0 focus:ring-1  focus:ring-gray-300 mb-6 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <RelatedMediaList
            mediaList={(search.results || []).filter((m) => {
              return m?.title.includes(searchText);
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default SeachPage;
