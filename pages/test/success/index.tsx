import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../../../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import NavigationBack from "../../../app/components/NavigationBack";
import TestSuccess from "../../../app/pages/test/success/TestSuccess";

const TestSuccessPage: NextPage = () => {

  return (
    <Wrapper>
      <div className="container">
        <NavigationBack/>
        <TestSuccess/>
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

export default TestSuccessPage
