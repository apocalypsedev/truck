// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useTranslation } from 'react-i18next';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Import Swiper core and required modules
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS

// // Initialize Swiper core components
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// // Import your images (assuming Img1 is correctly imported)
// import { Img1 } from '../../images/images';

// const MySwiper = () => {
//   const { t } = useTranslation();

//   const SwiperData = [
//     {
//       text: "swiper.text",
//       description: "swiper.description",
//       img: Img1,
//     }
//   ];

//   return (
//     <div>
//       <Swiper
//         id='swiper'
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         className="mySwiper"
//       >
//         {SwiperData.map((item, index) => (
//           <SwiperSlide key={index} className='swiper1'>
//             <div style={{ backgroundImage: `url(${item.img})` }} className="bg-cover bg-center h-64 w-full">
//               <h3>
//                 {t(item.text)} <br />
//                 {t(item.description)} <br /> 
//               </h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MySwiper;
