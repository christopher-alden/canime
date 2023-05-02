import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Dropdown } from './Dropdown';

const navbarRoutes = ['/home', '/search','/favorites','/explore','/details'];

export function Navbar() {
  const location = useLocation();
  const shouldShowNavbar = navbarRoutes.some(route => location.pathname.startsWith(route)) && location.pathname !== '/';

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      if (scrollTop < 50) {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarBackgroundColor = isNavbarTransparent ? '#14141480' : '#141414';
  const navbarBackgroundTransition = isNavbarTransparent ? 'background 0.5s ease-in-out' : 'background 0.5s ease-in-out';
  const navbarBlur = 'blur(10px)';

  if (!shouldShowNavbar) {
    return null;
  }
  
  return (
    <nav id="navbarid" className="fixed pt-2 translate-y-[-8px] z-50 w-full transition-all shadow-lg " style={{ backgroundColor: navbarBackgroundColor, transition: navbarBackgroundTransition, backdropFilter: navbarBlur }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <button
              className="block lg:hidden text-3xl text-white focus:outline-none"
              onClick={toggleDropdown}
            >
              <img src="https://img.icons8.com/ios-filled/100/FFFFFF/menu-rounded.png" className="w-8" alt="-"/>
            </button>
            <a href="/home" className="text-white text-3xl font-bold">
              <span className="text-d-accent">CA</span>NIME
            </a>
            <div className="flex items-center">
            {!isDropdownOpen && (
              <div className="hidden text-white lg:flex items-center gap-6">
                <a href="/home" className="hover:text-d-accent text-lg">
                  Home
                </a>
                <a href="/explore" className="hover:text-d-accent text-lg">
                  Explore
                </a>
                <a href="/favorites" className="hover:text-d-accent text-lg">
                  Favorites
                </a>
                <div className='my-auto mx-auto'>
                </div>
              </div>
            )}
          </div>
          </div>
          <div className='flex gap-4 items-center'>
          <SearchBar />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <Dropdown
              options={[
                { label: 'Home', value: '/home' },
                { label: 'Explore', value: '/explore' },
                { label: 'Favorites', value: '/favorites' },
              ]}
              handleChange={toggleDropdown}
              change = {isDropdownOpen}
            >
              <div className='my-auto'>
              </div>
            </Dropdown>
            
          </div>
        )}
      </div>
    </nav>
  );
}
