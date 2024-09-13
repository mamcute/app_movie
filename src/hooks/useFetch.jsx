import { useState, useEffect } from "react";
// /movie/${id}?append_to_response=release_dates,credits
const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOCKEN}`,
};
export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true }
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADER,
          ...headers,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [url, JSON.stringify(headers), method, enabled]);
  return { isLoading, data };
}
