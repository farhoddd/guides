import React from "react";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {Routes} from "../../constants/routes";

const Footer: React.FC = () => {
  const {t} = useTranslation('headerMenu')

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__row">
            <div className="footer__left">
              <div className="footer__logo">
                <a href="/">
                  <img src="/img/footer-logo.svg" alt=""/>
                </a>
              </div>
              <div className="footer__left--menu">
                <ul className="menu">
                  <li>
                    <Link href={Routes.about}>
                      <a>{t('about')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.education}>
                      <a>{t('education')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.registry}>
                      <a>{t('register')}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__right">

              <div className="footer__menu">

                <div className="footer__menu--title">
                  Регионы
                </div>
                <div className="footer__menu--list">
                  <ul className="menu">
                    <li><a href="#">Нур-Султан</a></li>
                    <li><a href="#">Алматы</a></li>
                    <li><a href="#">Акмолинская область</a></li>
                    <li><a href="#">Алматинская область</a></li>
                    <li><a href="#">Актюбинская область</a></li>
                  </ul>
                  <ul className="menu">
                    <li><a href="#">Атырауская область</a></li>
                    <li><a href="#">Кызылординская область</a></li>
                    <li><a href="#">Северо-Казахстанская область</a></li>
                    <li><a href="#">Чимкентская область</a></li>
                  </ul>
                  <ul className="menu">
                    <li><a href="#">Туркестанская область</a></li>
                    <li><a href="#">Туркестанская область</a></li>
                    <li><a href="#">Восточно-Казахстанская область</a></li>
                    <li><a href="#">Карагандинская область</a></li>
                  </ul>
                  <ul className="menu">
                    <li><a href="#">Костанайская область</a></li>
                    <li><a href="#">Павлодарская область</a></li>
                    <li><a href="#">Западно-Казахстанская област</a></li>
                  </ul>
                </div>

              </div>

              <div className="footer__social">

                <div className="social__item">
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="social__item">
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="social__item">
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.11996 4 3.39996 4.46C2.92921 4.59318 2.50194 4.84824 2.16131 5.19941C1.82068 5.55057 1.57875 5.98541 1.45996 6.46C1.14518 8.20556 0.991197 9.97631 0.999961 11.75C0.988741 13.537 1.14273 15.3213 1.45996 17.08C1.59092 17.5398 1.83827 17.9581 2.17811 18.2945C2.51794 18.6308 2.93878 18.8738 3.39996 19C5.11996 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1792 17.9094 22.4212 17.4746 22.54 17C22.8523 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.75 15.0205L15.5 11.7505L9.75 8.48047V15.0205Z" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="social__item">
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                        d="M16 11.3703C16.1234 12.2025 15.9812 13.0525 15.5937 13.7993C15.2062 14.5461 14.5931 15.1517 13.8416 15.53C13.0901 15.9082 12.2384 16.0399 11.4077 15.9062C10.5771 15.7726 9.80971 15.3804 9.21479 14.7855C8.61987 14.1905 8.22768 13.4232 8.09402 12.5925C7.96035 11.7619 8.09202 10.9102 8.47028 10.1587C8.84854 9.40716 9.45414 8.79404 10.2009 8.40654C10.9477 8.01904 11.7977 7.87689 12.63 8.0003C13.4789 8.12619 14.2648 8.52176 14.8716 9.12861C15.4785 9.73545 15.8741 10.5214 16 11.3703Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
