import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


export function TopPosterCard(props) {
  const title = props.media.title.english || props.media.title.romaji;

// RUSAK MOBILE ANCUR
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries)=>{
//       entries.forEach((entry)=>{
//           if(entry.isIntersecting){
//               entry.target.classList.add('show')
//           }
//           else{
//               entry.target.classList.remove('show')
//           }ver
//       });
//     });
//     const hiddenElements = document.querySelectorAll('.target');
//     hiddenElements.forEach((el)=>observer.observe(el));
//   }, [media.coverImage.large]);

  return (
    <Link to={`/details/${props.media.id}`}className="overflow-hidden w-32 md:w-44 lg:w-52 xl:w-64 hover:opacity-75 transition duration-300 block mb-4 ">
      <div className="w-full h-44 md:h-52 lg:h-64 xl:h-80 relative overflow-hidden z-[-10]">   
        <div className='h-full w-full absolute bg-gradient-to-r from-d-primary z-10'/>
        <Fade left>
          <div className='absolute text-6xl md:text-7xl lg:text-8xl font-bold z-20 py-2' style={{ 'WebkitTextStroke': '2px white', 'WebkitTextFillColor': 'transparent' }}>{props.index+1}</div>
        </Fade>
        <Fade left>
          <img className="rounded-md absolute top-0 left-0 w-full h-full object-cover opacity-80 " src={props.media.coverImage.large} alt={title}/>
          <div className='mx-auto absolute w-full  top-[280px] z-30 text-white font-bold px-8 truncate text-center uppercase'>
          {/* <NewEps/> */}
          {/* {title} */}
          </div>
        </Fade>
        
      </div>
      
      {/* <div className="py-2 px-1">
        <div className="text-d-text text-sm mb-2 overflow-hidden line-clamp-2  md:text-lg">
          {title}
        </div>
      </div> */}
    </Link>
  );
}