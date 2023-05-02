import { Fragment, useEffect, useState } from "react";

import { PosterCard } from "../lib/components/cards/PosterCard";

export default function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      const favoritesData = JSON.parse(localStorage.getItem('CANIME_FAVORITE')) || [];
      setFavorites(favoritesData);
    }, []);

    return(
        <Fragment>
            <div className="text-d-accent text-3xl px-12 pt-24 lg:pb-0 lg:text-4xl">Favorites</div>
            <div className="flex flex-col w-full items-center px-4">
                <div className="flex flex-wrap w-full p-8 justify-between gap-4 ">
                {favorites.map((media) => (
                    <div className="mb-4" key={media.id}>
                    <PosterCard media={media} />
                    </div>
                ))}
                </div>
            </div>
        </Fragment>
    );
}