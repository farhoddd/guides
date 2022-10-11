import React, { useState } from "react";
import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import Wrapper from "../../app/components/Wrapper";
import { useTranslation } from "next-i18next";
import RegistryInner from "../../app/pages/registry/InnerPage/RegistryInner";
import { GuideService } from "../../app/services/GuideService";
import { User, UserTour } from "../../app/types/types";

type Props = {
	guide: User;
	guideTours: UserTour[];
};

const RegistryItemPage: NextPage<Props> = ({ guide, guideTours }) => {
	const { t } = useTranslation(["system", "registry"]);

	return (
		<Wrapper>
			<div className='container'>
				<RegistryInner guideTours={guideTours} guide={guide} />
			</div>
		</Wrapper>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query,
}) => {
	let guide, guideTours;
	try {
		const { id } = query;
		const guideData = await GuideService.getGuideInfo(id as string);
		const guideToursData = await GuideService.getGuideTourList(id as string);
		guide = await guideData?.data?.data;
		guideTours = await guideToursData.data?.data;

		return {
			props: {
				...(await serverSideTranslations(
					locale as string,
					["headerMenu", "system", "education", "registry", "alphabet"],
					nextI18NextConfig
				)),
				guide,
				guideTours,
			},
		};
	} catch (e: any) {
		return {
			notFound: true,
		};
	}
};

export default RegistryItemPage;
