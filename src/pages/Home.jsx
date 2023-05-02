import { GET_CURR_RELEASE, GET_ROMANCE, GET_SLIDER, GET_TOP_10, GET_TOP_ANIME, GET_YBBA } from "../lib/queries/getAnime";
import { useQuery } from "@apollo/client";
import HomeSlider from "../lib/components/slider/HomeSlider";
import CustomLoader from "../lib/components/loaders/CustomLoader";
import PromoCard from "../lib/components/cards/PromoCard";
import CardsScroll from "../lib/components/divs/CardsScroll";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { Fragment, useEffect } from "react";

const useAnimeQuery = (query, variables) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      page: 1,
      perPage: 20,
    },
    fetchPolicy: 'cache-and-network',
  });
  return { loading, error, data };
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const currQuery = useAnimeQuery(GET_CURR_RELEASE);
  const topQuery = useAnimeQuery(GET_TOP_ANIME);
  const romQuery = useAnimeQuery(GET_ROMANCE);
  const lolQuery = useAnimeQuery(GET_YBBA);
  const sliderQuery = useAnimeQuery(GET_SLIDER);
  const trendQuery = useQuery(GET_TOP_10);

  const navigate = useNavigate();
  if (currQuery.loading || topQuery.loading || romQuery.loading || lolQuery.loading || sliderQuery.loading ||trendQuery.loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomLoader />
      </div>
    );
  else if (currQuery.error || topQuery.error || romQuery.error || lolQuery.error|| sliderQuery.error || trendQuery.error ){
    navigate('/error');
    return null;
  }
  const currAnime = currQuery.data.Page.media;
  const topAnime = topQuery.data.Page.media;
  const romAnime = romQuery.data.Page.media;
  const lolAnime = lolQuery.data.Page.media;
  const sliderAnime = sliderQuery.data.Page.media;
  const trendAnime = trendQuery.data.Page.media;

  return (
    <Fade>
      <Fragment>
      <HomeSlider media={sliderAnime}/>
      <CardsScroll card={trendAnime} title="TOP 10 THIS WEEK" mode="top"/>
      <CardsScroll card={currAnime} title="Now Airing" />
      <div className="relative px-6 py-8 my-8 md:px-6 md:py-16 bg-gradient-to-l from-d-primary to-d-secondary">
          <PromoCard/>
      </div>
      <CardsScroll card={topAnime} title="Most Popular"/>
      <CardsScroll card={romAnime} title="WWB (Waktu Wibu Galau)"/>
      <CardsScroll card={lolAnime} title="Long Wierd Titles"/>
      </Fragment>
    </Fade>
  );
}
