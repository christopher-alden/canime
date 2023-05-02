import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Details from './pages/Details';
import AnimeSearch from './pages/Search';
import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
import './index.css'
import Landing from './pages/Landing';
import { Navbar } from './lib/components/nav/NavBar';
import Footer from './lib/components/footer/Footer';
import { useContext, useState } from 'react';
import { ThemeContext, THEME } from './lib/components/context/ThemeContext';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {
  let [currTheme, setCurrTheme] = useState(THEME.dark);
  let changeTheme = () =>{
    if(currTheme===THEME.dark) setCurrTheme(THEME.light);
    else setCurrTheme(THEME.dark);
  }
  let theme = useContext(ThemeContext)
  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={currTheme}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route path="/search" element={<AnimeSearch />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
        <Footer>
        {currTheme === THEME.light ? (
          <button onClick={changeTheme} className='border-2 py-1 px-2 rounded-md my-4' style={{color:theme.text}}>Light</button>
        ) : (
          <button onClick={changeTheme} className='border-2 py-1 px-2 rounded-md my-4'  style={{color:theme.text}}>Dark</button>
        )}
          
        </Footer>
      </Router>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
