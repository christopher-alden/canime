import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECOM } from "../../queries/getAnime";
import CustomLoader from "../loaders/CustomLoader";
import CardsScroll from "../divs/CardsScroll";
import { Fade } from "react-reveal";

export default function DetailCard({ id, coverImage, title, bannerImage, startDate, status, episodes, duration, genres, description, format ,airingSchedule, averageScore, popularity}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const newtitle = title.english || title.romaji; 
  let airingText = '';
  
  if(status === 'FINISHED'){
    airingText = 'Airing: Finished';
  }
  else{
    const now = Date.now() / 1000;
    const nextAiring = airingSchedule.nodes.find((s) => s.airingAt > now);
  
    if(nextAiring) {
      const { episode, timeUntilAiring } = nextAiring;
      const days = Math.floor(timeUntilAiring / (24 * 60 * 60));
      const hours = Math.floor((timeUntilAiring % (24 * 60)) / 60);
      const mins = timeUntilAiring % 60;
      if(days > 0) airingText = `Ep ${episode}: ${days}d ${hours}h ${mins}m`;
      else if(hours > 0) airingText = `Ep ${episode}: ${hours}h ${mins}m`;
      else airingText = `Ep ${episode}: ${mins}m`;
    }
    else airingText = 'N/A';
  }
  const [isFavorited, setIsFavorited] = useState(false);
    
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('CANIME_FAVORITE')) || [];
    const index = favorites.findIndex((favorite) => favorite.id === id);
    setIsFavorited(index > -1);
  }, [id]);
  
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    const favorites = JSON.parse(localStorage.getItem('CANIME_FAVORITE')) || [];
    const index = favorites.findIndex((favorite) => favorite.id === id);
    
    if(index > -1) favorites.splice(index, 1);
    else favorites.push({ id, coverImage, title, episodes });

    localStorage.setItem('CANIME_FAVORITE', JSON.stringify(favorites));
  };
  
  const startAirDate = new Date(`${startDate.year}-${startDate.month}-${startDate.day}`);
  const formattedStartDate = `${startAirDate.getDate().toString().padStart(2, '0')}/${(startAirDate.getMonth() + 1).toString().padStart(2, '0')}/${startAirDate.getFullYear()}`;
  
  const { loading, error, data } = useQuery(GET_RECOM, {
    variables: { 
      search: title.enlish ||title.romaji
      },
  });

  if(loading) return (
    <div className="flex justify-center items-center h-screen">
      <CustomLoader/>
    </div>
  );
  if(error) return <p>Error: {error.message}</p>;
  const recomAnime = data.anime.recommendations.nodes.map((node) => node.mediaRecommendation);
  if(!id) return null;
  return (
    <Fade>
    <div className="relative">
      <div className="relative">
        <div className="absolute w-full h-full bg-gradient-to-t from-d-primary z-10"/>
        <div className="h-[400px] md:h-[500px] lg:h-[600px]">
        <img src={bannerImage} alt={newtitle} className="opacity-40 object-cover w-full h-full" />
        <div className="z-20 p-4 absolute inset-0 flex justify-center items-center text-white text-3xl font-bold uppercase text-shadow  text-center line-clamp-4 lg:text-5xl xl:text-6xl">
          {newtitle}
        </div>
        </div>
      </div>
      <div className="px-4 py-6 lg:px-8 lg:py-10 text-d-text">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="hidden lg:block w-28 lg:w-64">
            <img src={coverImage.large } alt={newtitle} className="w-full h-auto rounded-md" />
          </div>
          <div className="flex-1 bg-d-secondary rounded-lg p-6">
            <button onClick={toggleFavorite} className='bg-d-accent text-white text-sm font-bold uppercase rounded-md shadow-md mb-4 py-3 px-4 flex items-center gap-3 hover:scale-95 transition duration-100' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                </svg>
                {isFavorited ? 'Remove From Favorites' : 'Add To Favorites'}
            </button>
            <div className="mb-2">Description:</div>
            <div dangerouslySetInnerHTML={{ __html:description }} className="text-d-text text-sm text-justify md:text-base"></div>
          </div>
        </div>
        <div className="bg-d-secondary rounded-lg mt-6 p-6 lg:px-10">
          <div className="flex justify-between overflow-x-auto gap-10 text-d-text">
            <div className="mb-2 flex-none"><span className="text-white">Format</span><br />{format ? format : '-'}</div>
            <div className="mb-2 flex-none"><span className="text-white">Episodes</span><br />{episodes ? episodes : '-'}</div>
            <div className="mb-2 flex-none"><span className="text-white">Duration</span><br />{duration ? `${duration} Min` : '-'} </div>
            {status !== 'FINISHED' ? (
              <div className="mb-2 flex-none"><span className="text-white">Next Airing</span><br />{airingText}</div>
            ) : (
              <div className="mb-2 flex-none"><span className="text-white">Airing</span><br />Finished</div>
            )}
            <div className="mb-2 flex-none"><span className="text-white">Status</span><br />{status}</div>
            <div className="text-justify mb-2 flex-none">
              <span className="text-white">Genres</span><br /> {genres.map((genre, index) => {
                return index === genres.length - 1 ? genre : `${genre}, `;
              })}
            </div>
            <div className="mb-2 flex-none"><span className="text-white">Start Date</span><br />{startDate ? formattedStartDate : '-'}</div>
            <div className="mb-2 flex-none"><span className="text-white">Average Score</span><br />{averageScore ? `${averageScore}%` : '-'}</div>
            <div className="mb-2 flex-none"><span className="text-white">Popularity</span><br />{popularity ? popularity : '-'}</div>
          </div>
        </div>
        
      </div>
      <CardsScroll card={recomAnime} title="more like this"/>
    </div>
    </Fade>
  );
}
  