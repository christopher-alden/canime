import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../lib/queries/getAnime";
import CustomLoader from "../lib/components/loaders/CustomLoader";
import DetailCard from "../lib/components/cards/DetailCard";
export default function Details() {
 
  const { id } = useParams();
  
  const { loading, error, data } = useQuery(GET_DETAILS, {
    variables: { mediaId: id },
  });
  
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomLoader />
      </div>
    );
  } else if (error){
    navigate('/error')
    return null
  };
  
  const {coverImage, title, bannerImage, startDate, status, episodes, duration, genres, description,format,airingSchedule,averageScore,popularity} = data.Media;

  return (
      <DetailCard
        id={id}
        coverImage={coverImage}
        title={title}
        bannerImage={bannerImage}
        startDate={startDate}
        status={status}
        episodes={episodes}
        duration={duration}
        genres={genres}
        description={description}
        format={format}
        airingSchedule={airingSchedule}
        averageScore={averageScore}
        popularity={popularity}
      />
  );
}
