import { useWatch } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const GenresInput = ({ control, onChange, value = [] }) => {
  // useWatch nay la cua useform de bt xem la dang chon cua cai nao
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType }
  );
  useEffect(() => {
    onChange([]);
  }, [mediaType]);
  return (
    <div className="flex gap-1 flex-wrap">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          className={`border px-2 py-1 rounded-lg cursor-pointer ${
            value.includes(genre.id) ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...newValue, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};

export default GenresInput;
