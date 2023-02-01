// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from 'swiper';
// import PlayPause from './PlayPause';
// import { playPause, setActiveSong } from '../redux/features/playerSlice';

// import { useGetTopChartsQuery } from '../redux/services/shazamCore';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// const TopPlay = () => {
//   const dispatch = useDispatch();
//   const { activeSong, isPlaying } = useSelector((state) => state.player);
//   const { data } = useGetTopChartsQuery();
//   const divRef = useRef(null);

//   useEffect(() => {
//     divRef.current.scrollIntoView({ behavior: 'smooth' });
//   });

//   const TopChartCard = (song, i) => (
//     <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
//       {song.title}
//     </div>
//   );

//   const topPlays = data?.slice(0, 5);
//   const handlePauseClick = () => {
//     dispatch(playPause(false));
//   };
//   const handlePlayClick = () => {
//     dispatch(setActiveSong({ song, data, i }));
//     dispatch(playPause(true));
//   };

//   return (
//     <div
//       ref={useRef}
//       className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
//     >
//       <div className="w-full flex flex-col">
//         <div className="flex flex-row justify-between items-center">
//           <h2 className="text-white font-boldtex-2xl">Top charts</h2>
//           <Link to="/top-charts">
//             <p className="text-gray-300 text-base cursor-pointer">See more</p>
//           </Link>
//         </div>
//         <div className="mt-4 flex flex-col gap-1">
//           {topPlays?.map((song, i) => (
//             <TopChartCard song={song} i={i} key={song.key} />
//           ))}
//         </div>
//       </div>
//       <div className="w-full flex flex-col mt-8">
//         <div className="flex flex-row justify-between items-center">
//           <h2 className="text-white font-boldtex-2xl">Top Artists</h2>
//           <Link to="/top-artists">
//             <p className="text-gray-300 text-base cursor-pointer">See more</p>
//           </Link>
//         </div>
//         <Swiper
//         slidesPerView="auto"
//         spaceBetween={15}
//         freeMode
//         centeredSlides
//         centeredSlidesBounds
//         className='mt-4'>
//           {topPlays?.map((song, i) => (
//             <SwiperSlide key={song?.key} style={{width: '25%', height: 'auto'}} className="shadow-lg rounded-full animate-slideright">
//               <Link to={`/artists/${song?.artists[0].adamid}`}>
//                 <img src={song?.images.background} alt="name" className="rounded-full w-full object-cover" />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
const TopPlay = () => <div>TopPlay</div>
export default TopPlay;