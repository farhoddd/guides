import React from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import {Grid, Navigation, Scrollbar} from "swiper";

const Advantages: React.FC = () => {

  return (
    <div className="advantage__swiper--block">
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: '.advantage__arrow--prev',
          nextEl: '.advantage__arrow--next'
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          520: {
            slidesPerView: 1.5,
          },
          645: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="advantage__item">
            <div className="advantage__item--icon">
              <img src="/img/advantage/advantage-1.png"/>
            </div>
            <div className="advantage__item--title">
              Пройти тестирование
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage__item">
            <div className="advantage__item--icon">
              <img src="/img/advantage/advantage-2.png"/>
            </div>
            <div className="advantage__item--title">
              Пройти обучение
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage__item">
            <div className="advantage__item--icon">
              <img src="/img/advantage/advantage-3.png"/>
            </div>
            <div className="advantage__item--title">
              Получить лицензию
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage__item">
            <div className="advantage__item--icon">
              <img src="/img/advantage/advantage-4.png"/>
            </div>
            <div className="advantage__item--title">
              Официальный реестр гидов
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="advantage__item">
            <div className="advantage__item--icon">
              <img src="/img/advantage/advantage-5.png"/>
            </div>
            <div className="advantage__item--title">
              Персональный профиль + бейдж
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="slider__arrows--block slider__arrows--work">
        <div className="slider__arrow advantage__arrow--prev" slot="prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="slider__arrow advantage__arrow--next" slot="next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Advantages
