import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

const Reviews: React.FC = () => {

  return (
    <>
      <Swiper
        modules={[Navigation]}
        className="reviews__sliders"
        slidesPerView={1.5}
        autoHeight={false}
        spaceBetween={20}
        navigation={{
          prevEl: ".reviews__arrow--prev",
          nextEl: ".reviews__arrow--next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 1,
          },
          645: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1.5,
          },
          1200: {
            slidesPerView: 1.5,
          },
        }}
      >
        <SwiperSlide>
          <div className="review__item">

            <div className="review__item--top">
              <div className="review__top--title">
                Наталья Т.
              </div>
              <div className="review__top--like">
                8.9
              </div>
            </div>
            <div className="review__item--info">
              <div className="review__item--starsblock">
                <div className="review__item--stars">
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        stroke="#C59D71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="review__item--data">
                  01.03.2019
                </div>
              </div>

              <div className="review__item--desc">
                Незабываемые впечатления от природы Казахстана. Интересный маршрут. Индивидуальный подход, все наши
                пожелания были учтены. Павел не зря дал такое название - «Изумруд в гранитной оправе». Места необычайно
                красивые. Природа Казахстана, интересные истории, странные сооружения, гостеприимные люди. Не буду
                вдаваться в подробности - сами всё увидите ! Хочу только подчеркнуть профессионализм Павла Шитика как
                гида и водителя, его заботливое отношение к нам во время поездки, комфортность и проходимость машины, на
                которой мы путешествовали. Спасибо, Павел, за ваш энтузиазм открывателя и желание делиться этим с
                другими людьми.Новых вам маршрутов!
              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review__item">

            <div className="review__item--top">
              <div className="review__top--title">
                Наталья Т.
              </div>
              <div className="review__top--like">
                8.9
              </div>
            </div>
            <div className="review__item--info">
              <div className="review__item--starsblock">
                <div className="review__item--stars">
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        stroke="#C59D71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="review__item--data">
                  01.03.2019
                </div>
              </div>

              <div className="review__item--desc">
                Незабываемые впечатления от природы Казахстана. Интересный маршрут. Индивидуальный подход, все наши
                пожелания были учтены. Павел не зря дал такое название - «Изумруд в гранитной оправе». Места необычайно
                красивые. Природа Казахстана, интересные истории, странные сооружения, гостеприимные люди. Не буду
                вдаваться в подробности - сами всё увидите ! Хочу только подчеркнуть профессионализм Павла Шитика как
                гида и водителя, его заботливое отношение к нам во время поездки, комфортность и проходимость машины, на
                которой мы путешествовали. Спасибо, Павел, за ваш энтузиазм открывателя и желание делиться этим с
                другими людьми.Новых вам маршрутов!
              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review__item">

            <div className="review__item--top">
              <div className="review__top--title">
                Наталья Т.
              </div>
              <div className="review__top--like">
                8.9
              </div>
            </div>
            <div className="review__item--info">
              <div className="review__item--starsblock">
                <div className="review__item--stars">
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        fill="#C59D71" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="review__star">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.49996 1.41699L10.6887 5.85116L15.5833 6.56658L12.0416 10.0162L12.8775 14.8895L8.49996 12.5874L4.12246 14.8895L4.95829 10.0162L1.41663 6.56658L6.31121 5.85116L8.49996 1.41699Z"
                        stroke="#C59D71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="review__item--data">
                  01.03.2019
                </div>
              </div>

              <div className="review__item--desc">
                Незабываемые впечатления от природы Казахстана. Интересный маршрут. Индивидуальный подход, все наши
                пожелания были учтены. Павел не зря дал такое название - «Изумруд в гранитной оправе». Места необычайно
                красивые. Природа Казахстана, интересные истории, странные сооружения, гостеприимные люди. Не буду
                вдаваться в подробности - сами всё увидите ! Хочу только подчеркнуть профессионализм Павла Шитика как
                гида и водителя, его заботливое отношение к нам во время поездки, комфортность и проходимость машины, на
                которой мы путешествовали. Спасибо, Павел, за ваш энтузиазм открывателя и желание делиться этим с
                другими людьми.Новых вам маршрутов!
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
      <div className="slider__arrows--block slider__arrows--reviews">
        <div className="slider__arrow reviews__arrow--prev" slot="prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="slider__arrow reviews__arrow--next" slot="next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#C59D71" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Reviews
