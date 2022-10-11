import React from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import Wrapper from "../../app/components/Wrapper";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import HowItWork from "../../app/pages/index/HowItWork";
import Link from "next/link";
import {Routes} from "../../app/constants/routes";

const AboutPage: NextPage<any> = () => {
  const {t} = useTranslation(['system', 'mainLevel', 'about', 'aboutBanner', 'mainWork'])
  const router = useRouter()

  const returnBack = () => {
    router.back()
  }

  return (
    <Wrapper>
      <div className="page__title--block">
        <div className="container">
          <div className="section__title--block">
            <a onClick={returnBack} className="section__title--arrow">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.375 23.25L11.625 15.5L19.375 7.75" stroke="#0E1839" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              <span>{t('back')}</span>
            </a>
          </div>

          <div className="section section--page section__about--banner">

            <div className="container">

              <div className="level__banner">

                <div className="level__banner--left">
                  <div className="section__title" dangerouslySetInnerHTML={{__html: t('title', {ns: 'aboutBanner'})}}/>
                  <div className="level__banner--desc"
                       dangerouslySetInnerHTML={{__html: t('desc', {ns: 'aboutBanner'})}}/>
                  <div className="level__banner--link section__link">
                    <Link href={Routes.education}>
                      <a className="link__btn">{t('link', {ns: 'mainLevel'})}</a>
                    </Link>
                  </div>
                </div>
                <div className="level__banner--right">
                  <img src="/img/about__banner__img.png"/>
                </div>

              </div>

            </div>

          </div>

          <div className="section section__about">
            <div className="container">

              <div className="section__title" dangerouslySetInnerHTML={{__html: t('title', {ns: 'about'})}}/>
              <div className="about__block">
                <div className="about__block--desc" dangerouslySetInnerHTML={{__html: t('desc', {ns: 'about'})}}/>
              </div>

            </div>
          </div>

          <div className="section section__work">
            <div className="container">
              <div className="section__title" dangerouslySetInnerHTML={{__html: t('title', {ns: 'mainWork'})}}/>
              <HowItWork/>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ['headerMenu', 'system', 'mainLevel', 'aboutBanner', 'about', 'mainWork'],
        nextI18NextConfig
      )),
    },
  }
}

export default AboutPage
