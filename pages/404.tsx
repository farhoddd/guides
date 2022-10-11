import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import {useTranslation} from "next-i18next";

const ErrorPage: NextPage = () => {
  const {t} = useTranslation('system')

  return (
    <Wrapper>
      <div className="container">
        <div className="section__title text-center">
          <strong>404!</strong>
        </div>
        <div className="about__block">
          <div className="about__block--desc text-center">
            {t('not_found')}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async (
  {
    locale
  }
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ['headerMenu', 'system', 'education', 'registry', 'alphabet'],
        nextI18NextConfig
      )),
    },
  }
}

export default ErrorPage
