import { useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const footerRoutes = ['/home'];

export default function Footer({children}) {
  let theme = useContext(ThemeContext)
  const location = useLocation();
  const shouldShowFooter = footerRoutes.some(route => location.pathname.startsWith(route)) && location.pathname !== '/';
  
  if (!shouldShowFooter) {
    return null;
  }
  return (
      <footer className=" mt-8 py-10 md:py-20" style={{backgroundColor: theme.secondary}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2" style={{color: theme.text}}>
              <a href="/error" className="mx-4 hover:text-d-accent" >
                  Instagram
              </a>
              <a href="/error" className=" hover:text-d-accent mx-4">
                  Twitter
              </a>
              <a href="/error" className=" hover:text-d-accent mx-4">
                  LC095
              </a>
  
            </div>
            <div className="mt-8 md:mt-0 md:order-1"  style={{color:theme.text}}>
              <div>
              {children}
              </div>
              <a href="/" className=" font-bold text-3xl">
                <span className="text-d-accent">CA</span>NIME😍👍
              </a>
              <p className="my-4">
                  Friends <span className="text-d-text " style={{color:theme.accent}}>9Anime Crunchyroll Netflix</span></p>
              <p className="text-base">Copyright ©️ 2023 CAnime Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  