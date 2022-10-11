import React from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import ProfileContainer from "../../../app/components/Containers/ProfileContainer";
import ProfileTours from "../../../app/pages/profile/ToursSection/ProfileTours";
import withRequireAuth from "../../../app/hoc/withRequireAuth";

const ProfileToursPage: NextPage = () => {

  return (
    <ProfileContainer activeTab={2}>
      <ProfileTours/>
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

export default withRequireAuth(ProfileToursPage)
