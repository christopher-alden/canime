import React from 'react';
import Fade from 'react-reveal/Fade';
import aihoshino from '../assets/oshi-no-ko.jpg'

export default function PromoCard(){
    return (
        <Fade left>
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center rounded-md p-4">
                <div className="max-w-2xl mx-auto rounded-md overflow-hidden opacity-60 mb-4 md:mb-0 md:w-1/2">
                <img
                    src={aihoshino}
                    alt="oshi no peak"
                    className="w-full"
                />
                </div>
                <div className="flex-1 text-white md:mx-8">
                <h2 className="text-2xl text-d-accent font-bold md:text-4xl  md:mb-4">
                    TRENDING NOW : OSHI NO KO
                </h2>
                <p className="mt-2 text-base md:text-xl text-justify">
                    Ai Hoshino, a youthful and beautiful idol, is highly revered by her adoring fans as the epitome of innocence and purity. However, her pristine image is merely a facade.
                </p>
                </div>
            </div>
            </div>
        </Fade>
    );
}
  
