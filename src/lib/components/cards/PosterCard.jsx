import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export function PosterCard(props) {
  const [hovered, setHovered] = useState(false);
  const title = props.media.title.english || props.media.title.romaji;

  const titleHover = useSpring({
    opacity: hovered ? 0 : 1,
    transform: hovered ? 'translateY(100%)' : 'translateY(0%)',
    delay: hovered ? 600:100
  });

  return (
    <Link
      to={`/details/${props.media.id}`}
      className="relative overflow-hidden w-32 md:w-44 lg:w-52 xl:w-64 hover:opacity-75 transition duration-500 block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-44 md:h-52 lg:h-64 xl:h-80 relative overflow-hidden rounded-md">
        <img
          className={"absolute top-0 left-0 w-full h-full object-cover"}
          src={props.media.coverImage.large}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-d-secondary"></div>
          <animated.div
            style={titleHover}
            className="absolute bottom-0 left-0 w-full p-2 md:p-3 lg:p-4 mb-2 text-white overflow-hidden"
            >
            <div className="text-sm lg:text-base xl:text-lg font-bold line-clamp-2">
              {title}
            </div>
            <div className="text-xs md:text-sm mt-1 xl:mt-2 flex gap-4">
              <div>{props.media.episodes  ? props.media.episodes : '-'} episodes</div>
            </div>
          </animated.div>
        </div>
      </div>
    </Link>
  );
}
