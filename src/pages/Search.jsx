import { useQuery } from "@apollo/client";
import { SEARCH_ANIME } from "../lib/queries/searchAnime";
import { useLocation } from "react-router-dom";
import { PosterCard } from "../lib/components/cards/PosterCard";
import CustomLoader from "../lib/components/loaders/CustomLoader";
import Fade from 'react-reveal/Fade';



export default function AnimeSearch() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");

  const { loading, error, data } = useQuery(SEARCH_ANIME, {
    variables: { search: searchQuery },
  });

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <CustomLoader />
    </div>
  );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Fade>
      <div className="flex flex-col w-full items-center px-4 py-8">
        <div className="flex flex-wrap w-full p-8 justify-between gap-4 mt-10 md:mt-12">
          {data.Page.media.map((media) => (
            <div className="mb-4" key={media.id}>
              <PosterCard media={media} />
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
