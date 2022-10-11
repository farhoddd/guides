import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {useTranslation} from "next-i18next";

const HowItWork: React.FC = () => {
  const {t} = useTranslation('mainWork')

  return (
    <div className="work__swiper--block">
      <Swiper
        className="work__swiper"
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: '.work__arrow--prev',
          nextEl: '.work__arrow--next'
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          520: {
            slidesPerView: 2,
          },
          645: {
            slidesPerView: 2.5,
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
          <div className="task__item">
            <div className="task__item--img">
              <img src="/img/tasks/task-1.svg"/>
            </div>
            <div className="task__item--text" dangerouslySetInnerHTML={{__html: t('task_1')}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="task__item">
            <div className="task__item--img">
              <img src="/img/tasks/task-2.svg"/>
            </div>
            <div className="task__item--text" dangerouslySetInnerHTML={{__html: t('task_2')}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="task__item">
            <div className="task__item--img">
              <img src="/img/tasks/task-5.svg"/>
            </div>
            <div className="task__item--text" dangerouslySetInnerHTML={{__html: t('task_3')}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="task__item">
            <div className="task__item--img">
              <img src="/img/tasks/task-4.svg"/>
            </div>
            <div className="task__item--text" dangerouslySetInnerHTML={{__html: t('task_4')}}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="task__item">
            <div className="task__item--img">
              <img src="/img/tasks/task-3.svg"/>
            </div>
            <div className="task__item--text" dangerouslySetInnerHTML={{__html: t('task_5')}}/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="slider__arrows--block slider__arrows--work">
        <div className="slider__arrow work__arrow--prev" slot="prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="slider__arrow work__arrow--next" slot="next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
