import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../../../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import TestFailure from "../../../app/pages/test/failure/TestFailure";
import NavigationBack from "../../../app/components/NavigationBack";

const TestFailurePage: NextPage = () => {

  return (
    <Wrapper>
      <div className="container">
        <NavigationBack/>
        <TestFailure/>
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

export default TestFailurePage
