import React, { useRef, useState } from "react";
import { PosterCard } from "../cards/PosterCard";
import { TopPosterCard } from "../cards/TopPosterCard";

export default function CardsScroll({ card, title , mode}){
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        const position = container.scrollLeft;
        setScrollPosition(position);
    };

    const handleLeftClick = () => {
        const container = containerRef.current;
        const newPosition = scrollPosition - container.offsetWidth;
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
    };

    const handleRightClick = () => {
        const container = containerRef.current;
        const newPosition = scrollPosition + container.offsetWidth;
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
    };

    let cardComponent;
    if (mode === "top") cardComponent = TopPosterCard;
    else cardComponent = PosterCard;
    return(
    <div className="my-auto">
         <div className="hidden lg:flex justify-between lg:translate-y-48 xl:translate-y-56 opacity-100 px-4">
            <button className="z-60  opacity-70 w-8 hover:opacity-100  transition duration-300" onClick={handleLeftClick} disabled={scrollPosition === 0}>
            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/chevron-left.png" alt="left"/>
            </button>
            <button className="z-60 opacity-70 w-8 hover:opacity-100 rotate-180 transition duration-300" onClick={handleRightClick} disabled={containerRef.current && scrollPosition >= containerRef.current.scrollWidth - containerRef.current.offsetWidth}>
            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/chevron-left.png" alt="right"/>
            </button>
        </div>
        <div className="px-4 md:px-10 lg:px-14">
            <div className="flex gap-2 align-bottom">
            <div className="text-white text-xl font-semibold lg:text-2xl uppercase">{title}</div>
            </div>
            <div className="overflow-x-auto" ref={containerRef} onScroll={handleScroll}>
            {/* <Fade left cascade> */}
                <div className="flex flex-nowrap py-2 lg:py-4 mb-4 lg:mb-2 gap-4">
                    {card.map((media, index) => (
                    <div key={media.id}>
                        {React.createElement(cardComponent, { media , index})}
                    </div>
                    ))}
                </div>
            {/* </Fade> */}
            </div>
        </div>
    </div>
    );
}

