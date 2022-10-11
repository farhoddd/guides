import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {useTranslation} from "next-i18next";
import {GuideService} from "../../../app/services/GuideService";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import {UserTour} from "../../../app/types/types";
import ProfileContainer from "../../../app/components/Containers/ProfileContainer";
import ProfileTourInner from "../../../app/pages/profile/ToursSection/TourInner/ProfileTourInner";

type Props = {
  tour: UserTour
}

const ProfileToursInnerPage: NextPage<Props> = ({tour}) => {
  const {t} = useTranslation(['system', 'registry'])

  return (
    <ProfileContainer activeTab={2}>
      <ProfileTourInner tour={tour}/>
    </ProfileContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  {
    locale,
    query
  }
) => {
  let tour
  try{
    const {id} = query
    const tourData = await GuideService.getTour(id as string)
    tour = await tourData?.data?.data
    return {
      props: {
        ...(await serverSideTranslations(
          locale as string,
          ['headerMenu', 'system', 'education', 'registry', 'alphabet'],
          nextI18NextConfig
        )),
        tour
      }
    }
  } catch (e: any){
    return {
      notFound: true
    }
  }
}

export default ProfileToursInnerPage
