import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  // useSearchParams dung de lay du lieu o tim kiem cua duong linh sau do dung get de lay du lieu cua param tuong ung
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });
 
  //watch() de xem du lieu hien tai trong form
  const formValues = watch();
  useEffect(() => {
    setSearchFormValues(formValues);
  }, [JSON.stringify(formValues)]);
  return (
    <div className="border rounded-lg shadow-md p-4">
      <form action="" onSubmit={handleSubmit()} className="space-y-4">
        <FormField
          name="mediaType"
          lable="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          lable="Genres"
          control={control}
          Component={GenresInput}
        />
        <FormField
          name="rating"
          lable="Rating"
          control={control}
          Component={RatingInput}
        />
      </form>
    </div>
  );
};

export default SearchForm;
