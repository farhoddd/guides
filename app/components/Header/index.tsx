import React, {SyntheticEvent, useState} from "react";
import Link from "next/link"
import {Routes} from "../../constants/routes";
import {useTranslation} from "next-i18next";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useAuthContext} from "../../context/auth";
import {LocalStorageHandler} from "../../utils/localStorageHandler";
import {displaySuccessMessage} from "../../utils/helpers";


const Header: React.FC = () => {
  const {t, i18n} = useTranslation('headerMenu')
  const [menuClick, setMenuClick] = useState<Boolean>()
  const [langClick, setLangClick] = useState<Boolean>()
  const [loginClick, setLoginClick] = useState<Boolean>()
  const [mobileClick, setMobileClick] = useState<Boolean>()
  const {userInfo, updateUserInfo} = useAuthContext()
  const router = useRouter()
  const {pathname, asPath, query} = router

  const onClickHeaderMenu = () => {
    setMenuClick(!menuClick)
  }

  const onClickHeaderLang = () => {
    setLangClick(!langClick)
  }

  const onHeaderClick = () => {
    setLoginClick(!loginClick)
  }

  const mobileActive = () => {
    setMobileClick(true)
    document.body.classList.add('mobile__active');
  }

  const mobileInactive = () => {
    setMobileClick(false)
    document.body.classList.remove('mobile__active');
  }

  const changeLocale = (lang: "ru" | "kz" | "en", event: SyntheticEvent) => {
    event.preventDefault()
    router.push({pathname, query}, asPath, {locale: lang})
  }

  const logOut = () => {
    LocalStorageHandler.clearUserToken()
    updateUserInfo(null)
    displaySuccessMessage('Вы успешно вышли со своего аккаунта!')
  }

  const getCurrentLanguage = (lang: string) => {
    switch (lang) {
      case "en":
        return 'English'
      case "ru":
        return 'Русский'
      case "kz":
        return "Қазақ"
    }
  }

  return (
    <>
      <header className="header">
        <div className="container">

          <div className="header__row">
            <div className="header__left">
              <div className="header__logo">
                <Link href={Routes.home}>
                  <a>
                    <img src="/img/logo.svg" alt=""/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="header__right">

              <div className="header__menu">
                <ul className="menu">
                  <li>
                    <Link href={Routes.about}>
                      <a>
                        {t('about')}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.education}>
                      <a>
                        {t('education')}
                      </a>
                    </Link>
                  </li>
                  <li className={classNames("menu__item--children", {'header__menu--active': menuClick})}>
                    <Link href={Routes.registry}>
                      <a>
                        {t('register')}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={classNames("header__lang", {"header__lang--active": langClick})}>
                <div className="header__lang--top" onClick={onClickHeaderLang}>
                  <div className="header__lang--text">
                    {getCurrentLanguage(i18n.language)}
                  </div>
                  <div className="header__lang--arrow">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#0E1839" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="header__lang--list">
                  <ul>
                    <li>
                      <a href="#" onClick={event => changeLocale("kz", event)}>Қазақ</a>
                    </li>
                    <li>
                      <a href="#" onClick={event => changeLocale("ru", event)}>Русский</a>
                    </li>
                    <li>
                      <a href="#" onClick={event => changeLocale("en", event)}>English</a>
                    </li>
                  </ul>
                </div>

              </div>

              {!userInfo &&
                <div className="header__login">
                  <div className="header__login--icon">
                    <Link href={Routes.login}>
                      <a>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              }
              {userInfo && (
                <div className={classNames("header__login", {"header__login--active": loginClick})}
                     onClick={onHeaderClick}>
                  <div className="header__login--icon">
                    <a>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </div>
                  <div className="header__login--list">
                    <div className="login__list--top">
                      <div className="login__list--name">
                        {userInfo?.name} {userInfo?.surname}
                      </div>
                    </div>
                    <div className="login__list--body">
                      <div className="login__list--menu">
                        <ul className="menu">
                          <li>
                            <Link href={Routes.profile}>
                              <a>Мой профиль</a>
                            </Link>
                          </li>
                          <li>
                            <Link href={Routes.requests}>
                              <a>Мои заявки</a>
                            </Link>
                          </li>
                          <li>
                            <Link href={Routes.tours}>
                              <a>Мои маршруты</a>
                            </Link>
                          </li>
                          <li>
                            <Link href={Routes.reviews}>
                              <a>Мои отзывы</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="login__list--footer">
                        <div className="login__list--logout">
                          <a onClick={logOut}>Выход</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="header__lang--burger">
                <div className="header__burger--click" onClick={mobileActive}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

      </header>
      <header className="header__mobile">
        <div className="header__mobile--top">
          <div className="header__mobile--logo">
            <Link href={Routes.home}>
              <a>
                <img src="/img/footer-logo.svg" alt=""/>
              </a>
            </Link>
          </div>
          <div className="header__mobile--close">
            <div className="mobile__close--click" onClick={mobileInactive}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="header__mobile--body">
          <div className="header__mobile--menu">
            <ul className="menu">
              <li>
                <Link href={Routes.about}>
                  <a>
                    {t('about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={Routes.education}>
                  <a>
                    {t('education')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={Routes.home}>
                  <a>
                    {t('certification')}
                  </a>
                </Link>
              </li>
              <li className={classNames("menu__item--children", {'header__menu--active': menuClick})}>
                <a onClick={onClickHeaderMenu}>
                  {t('register')}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                  </svg>
                </a>
                <ul className="menu--children">
                  <li>
                    <Link href={Routes.home}>
                      <a>
                        Гиды
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.home}>
                      <a>
                        Инструкторы туризма
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.home}>
                      <a>
                        Экскурсоводы
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__mobile--bg">
          <img src="/img/header__mobile.png"/>
        </div>
      </header>
    </>
  )
}

export default Header
