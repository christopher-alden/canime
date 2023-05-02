import "./Dropdown.css"
import { useSpring, animated } from 'react-spring';



export function Dropdown({ children }) {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 250, friction: 30 }
  });
  return (
    <div className="dropdown border-t-2 border-d-accent lg:hidden w-full">
      
      <animated.div style={spring} className="pt-2 pb-2 text-lg">
        <animated.div style={spring}>
          <a href="/home" className="block py-1 text-white mb-2 hover:text-d-accent">
            Home
          </a>
        </animated.div>
        <animated.div style={spring}>
          <a href="/explore" className="block py-1 text-white mb-2 hover:text-d-accent">
            Explore
          </a>
        </animated.div>
        <animated.div style={spring}>
          <a href="/favorites" className="block py-1 text-white mb-2 hover:text-d-accent">
            Favorites
          </a>
        </animated.div>
        {children}
      </animated.div>
    </div>
  );
}