import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function MySwiper() {
  return (
    <div>
    <Swiper
      id='swiper'
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"

    >
      <SwiperSlide className='swiper1'>
        <div>
          <h3>
          Xush kelibsiz! <br />
          Yuk olishga yoki topishga <br />
          Qiynalyapsizmi 
        </h3>
          <div className='main__card'>
            <h2>Yuklar soni: <span>2233</span></h2>
            <h2>Foydalanuvchilar: <span>11002</span></h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='swiper2'>
        <div>
          <h3>
            Biz sizga yordam bera olamiz! <br />
            Siz bizning saytimizda o'z mahsulotingizni <br />
            Reklama qilishingiz va <br />
            Mahsulotlarni topishingiz mumkin!
          </h3>
          <div className='main__card'>
            <h2>Davlatlar soni: <span>2233</span></h2>
            <h2>Xaydovchilar soni: <span>11002</span></h2>
          </div>
        </div>

      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default MySwiper