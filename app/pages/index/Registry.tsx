import React from "react";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link"
import {Routes} from "../../constants/routes";

const registrSlide = [
  {
    id: 1,
    categories: '0',
    src: '/img/profile.png',
    name: 'ТОО "ALTYN CROWN KZ"',
    city: 'Алматы',
    rating: '',
    experience: ''
  }, {
    id: 1,
    categories: '1',
    src: '/img/profile.png',
    name: 'Токушев Олжас Рахимгалымович',
    city: 'Восточно-Казахстанская область'
  }, {
    id: 1,
    categories: '2',
    src: '/img/profile.png',
    name: 'Левченко Милена Вадимовна',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '3',
    src: '/img/profile.png',

    name: 'Кудайбергенов Ерлан Асанович',
    city: 'Туркестанская область'
  }, {
    id: 1,
    categories: '0',
    src: '/img/profile.png',

    name: 'Хачатрян Сергей Рафаэлович',
    city: 'Мангистауская область'
  }, {
    id: 1,
    categories: '1',
    src: '/img/profile.png',

    name: 'ТОО "ФНДЗИ"',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '2',
    src: '/img/profile.png',

    name: 'Ли Владислав Германович',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '3',
    src: '/img/profile.png',

    name: 'Мусапиров Азамат Даулетбекович',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '0',
    src: '/img/profile.png',

    name: 'ТОО "KAZ TRAVEL ALMATY"',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '1',
    src: '/img/profile.png',

    name: 'Жардемали Гульнар Руслановна',
    city: 'Нур-Султан'
  }, {
    id: 1,
    categories: '2',
    src: '/img/profile.png',

    name: 'Лукьянина Ирина Владимировна',
    city: 'Нур-Султан'
  }, {
    id: 1,
    categories: '3',
    src: '/img/profile.png',

    name: 'ТОО "HappyLife"',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '0',
    src: '/img/profile.png',

    name: 'Траиспаева Маржан Омарбековна',
    city: 'Нур-Султан'
  }, {
    id: 1,
    categories: '1',
    src: '/img/profile.png',

    name: 'Тлебалдина Динара Ермаковна',
    city: 'Восточно-Казахстанская область'
  }, {
    id: 1,
    categories: '2',
    src: '/img/profile.png',

    name: 'Кадникова Марина Сергеевна',
    city: 'Алматы'
  }, {
    id: 1,
    categories: '0',
    src: '/img/profile.png',

    name: 'Чуров Руслан Нагимович',
    city: 'Мангистауская область'
  }, {
    id: 1,
    categories: '0',
    src: '/img/profile.png',
    name: 'Подвиг Екатерина Александрова',
    city: 'Шымкент'
  }
]


const Registry = () => {

  return (
    <div className="registry__slider--block">
      <Swiper
        className="registry__slider"
        spaceBetween={70}
        slidesPerView={5}
        modules={[Navigation]}
        navigation={{
          prevEl: '.registry__arrow--prev',
          nextEl: '.registry__arrow--next'
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.5,
          },
          520: {
            slidesPerView: 1.8,
          },
          645: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}>
        {registrSlide.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="registry__item">
              <div className="registry__item--img">
                <Link href={Routes.registryItem + item.id}>
                  <a>
                    <img src={item.src} alt={item.name}/>
                  </a>
                </Link>
              </div>
              {item.rating && (
                <div className="registry__item--rating">
                  {item.rating}
                </div>
              )}
            </div>
            <div className="registry__item--info">
              <div className="registry__item--title">
                <Link href={Routes.registryItem + item.id}>
                  <a>{item.name}</a>
                </Link>
              </div>
            </div>
            {item.experience && (
              <div className="registry__item--experience">
                {item.experience}
              </div>
            )}
            {/*<div className="registry__item--city">*/}
            {/*  <div className="registry__city--icon">*/}
            {/*    <img src="/img/map-marker.svg"/>*/}
            {/*  </div>*/}
            {/*  <div className="registry__city--text">*/}
            {/*    { item.city }*/}
            {/*  </div>*/}
            {/*</div>*/}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider__arrows--registry">
        <div className="slider__arrow registry__arrow--prev" slot="prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="slider__arrow registry__arrow--next" slot="next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Registry
