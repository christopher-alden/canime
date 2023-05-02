import {Fragment, useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';
import { useQuery } from "@apollo/client";
import { GET_CURR_RELEASE, GET_CUTE, GET_FISH, GET_HORROR, GET_IDOL, GET_MG, GET_ROMANCE, GET_SOL, GET_SPORTS, GET_UPCOMING } from "../lib/queries/getAnime";
import CustomLoader from "../lib/components/loaders/CustomLoader";
import CardsScroll from "../lib/components/divs/CardsScroll";
import { useSpring, animated } from "react-spring";
import mushoku from '../lib/components/assets/mushoku.jpg'
import { useNavigate } from 'react-router-dom'


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

export default function Explore(){
    const currQuery = useAnimeQuery(GET_CURR_RELEASE);
    const solQuery = useAnimeQuery(GET_SOL);
    const sportsQuery = useAnimeQuery(GET_SPORTS);
    const upQuery = useAnimeQuery(GET_UPCOMING);
    const horrorQuery = useAnimeQuery(GET_HORROR);
    const romQuery = useAnimeQuery(GET_ROMANCE);
    const fishQuery = useAnimeQuery(GET_FISH);
    const cuteQuery = useAnimeQuery(GET_CUTE);
    const mgQuery = useAnimeQuery(GET_MG);
    const idolQuery = useAnimeQuery(GET_IDOL);

    const [zoomLevel, setZoomLevel] = useState(1);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const zoom = 1 + scrollPosition / 1000;
          setZoomLevel(zoom);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const animation = useSpring({
        transform: `scale(${zoomLevel})`,
    });

    // const [showNavbar, setShowNavbar] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
    //     setShowNavbar(scrollPosition > 0);
    //   };
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
  
    // const navbarAnimation = useSpring({
    //   opacity: showNavbar ? 1 : 0,
    //   height: showNavbar ? '4rem' : '0',
    //   overflow: 'hidden',
    // });

    const navigate = useNavigate();

    if (currQuery.loading || solQuery.loading || sportsQuery.loading || upQuery.loading || horrorQuery.loading || romQuery.loading || fishQuery.loading || cuteQuery.loading || mgQuery.loading || idolQuery.loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomLoader />
      </div>
    );
    else if (currQuery.error || solQuery.error || sportsQuery.error || upQuery.error || horrorQuery.error || romQuery.error || fishQuery.error || cuteQuery.error || mgQuery.error|| idolQuery.error){
      navigate('/error');
      return null;
    }
    
    const currAnime = currQuery.data.Page.media;
    const solAnime = solQuery.data.Page.media;
    const sportsAnime = sportsQuery.data.Page.media;
    const upAnime = upQuery.data.Page.media;
    const horrorAnime = horrorQuery.data.Page.media;
    const romAnime = romQuery.data.Page.media;
    const fishAnime = fishQuery.data.Page.media;
    const cuteAnime = cuteQuery.data.Page.media;
    const mgAnime = mgQuery.data.Page.media;
    const idolAnime = idolQuery.data.Page.media;

    return(
      <Fragment>
        <div className="fixed overflow-hidden w-screen h-screen z-[-10]">
          <animated.div style={{...animation}}>
            <Zoom>
              <div className="h-screen px-8 absolute w-full  flex justify-center items-center align-text-middle text-white text-3xl text-center font-bold uppercase z-10 md:text-5xl xl:text-6xl">
                UPCOMING ANIME: <br/>MUSHOKU TENSEI SEASON 2
              </div>
            </Zoom>
          </animated.div>
          <img
              src={mushoku}
              alt="mushoku"
              className="object-cover w-full h-full opacity-40 "
          />
        </div>
        <div className="h-screen w-screen"></div>
        {/* <animated.div style={navbarAnimation}>
          <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-500 ease-in-out">
            <Navbar />
          </div>
        </animated.div> */}
        <div className="bg-d-primary z-5 pt-6 md:pt-4 pb-24">
          <div className="text-d-accent text-3xl px-4 pb-6 md:px-10 md:pt-4 lg:px-14 lg:pb-0 lg:text-4xl">Explore</div>
          <CardsScroll card={upAnime} title="Worth The Wait"/>
          <CardsScroll card={currAnime} title="Now Showing"/>
          <CardsScroll card={solAnime} title="Slice of Peak"/>
          <CardsScroll card={sportsAnime} title="Go Outside"/>
          <CardsScroll card={horrorAnime} title="Horror & Thrillers"/>
          <CardsScroll card={romAnime} title="For You"/>
          <CardsScroll card={fishAnime} title="Fishing Animes"/>
          <CardsScroll card={cuteAnime} title="Cute Girls Doing Cute Things"/>
          <CardsScroll card={mgAnime} title="???"/>
          <CardsScroll card={idolAnime} title="You've Reached The Bottom"/>
        </div>
      </Fragment>
    );
}
