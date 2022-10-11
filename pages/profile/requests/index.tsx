import React from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import ProfileRequests from "../../../app/pages/profile/RequestsSection/ProfileRequests";
import ProfileContainer from "../../../app/components/Containers/ProfileContainer";
import withRequireAuth from "../../../app/hoc/withRequireAuth";

const ProfileRequestsPage: NextPage = () => {

  return (
    <ProfileContainer activeTab={1}>
      <ProfileRequests/>
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

export default withRequireAuth(ProfileRequestsPage)
