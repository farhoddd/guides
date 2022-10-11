import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {useTranslation} from "next-i18next";
import NavigationBack from "../../app/components/NavigationBack";
import RegistryGuidesRatingBlock from "../../app/pages/registry/RegistryGuidesRatingBlock";
import RegistryGuidesListBlock from "../../app/pages/registry/RegistryGuidesListBlock";

const RegistryPage: NextPage<any> = () => {
  const {t} = useTranslation(['system', 'registry'])

  return <Wrapper>
    <div className="container">
      <NavigationBack returnBackText={t('back', {ns: "system"})}/>
      <RegistryGuidesRatingBlock/>
      <RegistryGuidesListBlock/>
    </div>
  </Wrapper>
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

export default RegistryPage
