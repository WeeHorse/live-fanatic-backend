import { useState, useEffect } from "react";

/*How to use hook and display example
In function:
    const { error, isPending, data: artists } = useFetch("/data/artists");

In HTML:
    {artists && artists.map((artist) => <p> {artist.name}</p>)} 
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
*/

const useFetch = (apiEndpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(apiEndpoint, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [apiEndpoint]);

  return { data, isPending, error };
};

export default useFetch;
