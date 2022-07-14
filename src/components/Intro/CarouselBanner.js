import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './styles.css';

import bannerImage1 from '../../images/banners/1.png';
import bannerImage2 from '../../images/banners/2.png';
import bannerImage3 from '../../images/banners/3.png';
import bannerImage4 from '../../images/banners/4.png';

const bannerImages = [
  {
    src: bannerImage1,
    alt: 'banner 1',
  },
  {
    src: bannerImage2,
    alt: 'banner 2',
  },
  {
    src: bannerImage3,
    alt: 'banner 3',
  },
  {
    src: bannerImage4,
    alt: 'banner 4',
  },
];

const CarouselBanner = () => {
  return (
    <div id="mSwiperWrapper">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        style={{ width: '100%' }}
        effect={'fade'}
        id="mainSwiper"
      >
        {bannerImages.map((banner, index) => (
          <>
            <SwiperSlide key={banner.src}>
              <img width="100%" src={banner.src} alt={banner.alt} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBanner;
