import React, {useRef, useState} from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import ProfileSection from "../../app/pages/profile/Profile";
import ProfileContainer from "../../app/components/Containers/ProfileContainer";
import withRequireAuth from "../../app/hoc/withRequireAuth";
import {scrollToTop} from "../../app/utils/helpers";

const ProfilePage: NextPage<any> = () => {
  const rootRef = useRef(null)

  const smoothScrollToTop = () => {
    scrollToTop(rootRef)
  }

  return (
    <ProfileContainer rootRef={rootRef} activeTab={0}>
      <ProfileSection smoothScrollToTop={smoothScrollToTop}/>
    </ProfileContainer>
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
        ['headerMenu'],
        nextI18NextConfig
      )),
    },
  }
}

export default withRequireAuth(ProfilePage)
