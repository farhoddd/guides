import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Routes } from "../app/constants/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import { useTranslation } from "next-i18next";
import Advantages from "../app/pages/index/Advantages";
import HowItWork from "../app/pages/index/HowItWork";
import Registry from "../app/pages/index/Registry";
import Reviews from "../app/pages/index/Reviews";
import Wrapper from "../app/components/Wrapper";

const Home: NextPage = (props) => {
	const { t } = useTranslation([
		"main",
		"mainAbout",
		"mainWork",
		"mainBadge",
		"mainRegistry",
		"mainReviews",
		"mainLevel",
		"training",
	]);

	return (
		<Wrapper>
			<div className='section__banner'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='banner__block banner__left'>
								<div className='banner__block--left'>
									<div className='banner__block--subtitle'>
										{t("left_subtitle")}
									</div>
									<h1 className='section__title'>
										<strong>
											{t("left_title")} <br />
											официально!
										</strong>
									</h1>
									<div className='banner__block--link section__link'>
										<Link href={Routes.registration}>
											<a className='link__btn'>{t("link")}</a>
										</Link>
									</div>
								</div>
								<div className='banner__block--right'>
									<img src='/img/banner__img.png' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='section section__advantage'>
				<div className='container'>
					<div className='advantage__row'>
						<div className='advantage__item--col'>
							<div className='advantage__item'>
								<Link href='/test/1'>
									<a>
										<div className='advantage__item--icon'>
											<img src='/img/advantage/advantage-1.png' />
										</div>

										<div className='advantage__item--title'>
											{t("get_tested", { ns: "training" })}
										</div>
									</a>
								</Link>
							</div>
						</div>
						<div className='advantage__item--col'>
							<div className='advantage__item'>
								<div className='advantage__item--icon'>
									<img src='/img/advantage/advantage-2.png' />
								</div>
								<div className='advantage__item--title'>
									{t("get_trained", { ns: "training" })}{" "}
								</div>
							</div>
						</div>
						<div className='advantage__item--col'>
							<div className='advantage__item'>
								<div className='advantage__item--icon'>
									<img src='/img/advantage/advantage-3.png' />
								</div>
								<div className='advantage__item--title'>
									{t("get_license", { ns: "training" })}
								</div>
							</div>
						</div>
						<div className='advantage__item--col'>
							<div className='advantage__item'>
								<div className='advantage__item--icon'>
									<img src='/img/advantage/advantage-4.png' />
								</div>
								<div className='advantage__item--title'>
									{t("official", { ns: "training" })}
								</div>
							</div>
						</div>
						<div className='advantage__item--col'>
							<div className='advantage__item'>
								<div className='advantage__item--icon'>
									<img src='/img/advantage/advantage-5.png' />
								</div>
								<div className='advantage__item--title'>
									{t("profile_badge", { ns: "training" })}
								</div>
							</div>
						</div>
					</div>
					<Advantages />
				</div>
			</div>

			<div className='section section__about'>
				<div className='container'>
					<div className='section__title'>
						<strong>{t("title", { ns: "mainAbout" })}</strong>
					</div>
					<div className='about__block'>
						<div
							className='about__block--desc'
							dangerouslySetInnerHTML={{
								__html: t("desc", { ns: "mainAbout" }),
							}}
						/>
					</div>
				</div>
			</div>

			<div className='section section__work'>
				<div className='container'>
					<div className='section__title'>
						<strong>{t("title", { ns: "mainWork" })}</strong>
					</div>
					<HowItWork />
				</div>
			</div>

			<div className='section section__badge'>
				<div className='container'>
					<div
						className='section__title'
						dangerouslySetInnerHTML={{
							__html: t("title", { ns: "mainBadge" }),
						}}
					/>

					<div className='badge__row'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='badge__stages'>
									<div className='badge__stage--item'>
										<div className='badge__stage--number'>1</div>
										<div
											className='badge__stage--text'
											dangerouslySetInnerHTML={{
												__html: t("stage_1", { ns: "mainBadge" }),
											}}
										/>
									</div>
									<div className='badge__stage--item'>
										<div className='badge__stage--number'>2</div>
										<div
											className='badge__stage--text'
											dangerouslySetInnerHTML={{
												__html: t("stage_2", { ns: "mainBadge" }),
											}}
										/>
									</div>
									<div className='badge__stage--item'>
										<div className='badge__stage--number'>3</div>
										<div
											className='badge__stage--text'
											dangerouslySetInnerHTML={{
												__html: t("stage_3", { ns: "mainBadge" }),
											}}
										/>
									</div>
									<div className='badge__stage--item'>
										<div className='badge__stage--number'>4</div>
										<div
											className='badge__stage--text'
											dangerouslySetInnerHTML={{
												__html: t("stage_4", { ns: "mainBadge" }),
											}}
										/>
									</div>
									<div className='badge__stage--item'>
										<div className='badge__stage--number'>5</div>
										<div
											className='badge__stage--text'
											dangerouslySetInnerHTML={{
												__html: t("stage_5", { ns: "mainBadge" }),
											}}
										/>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='badge__img'>
									<img src='/img/badge-img.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='section section__registry section__bg'>
				<div className='container'>
					<div className='registry__title--block'>
						<div
							className='section__title'
							dangerouslySetInnerHTML={{
								__html: t("title", { ns: "mainRegistry" }),
							}}
						/>
						<div className='section__link'>
							<Link href={Routes.registry}>
								<a className='link__btn'>{t("link", { ns: "mainRegistry" })}</a>
							</Link>
						</div>
					</div>
					<Registry />
				</div>
			</div>

			<div className='section section__reviews section__bg'>
				<div className='container'>
					<div
						className='section__title'
						dangerouslySetInnerHTML={{
							__html: t("title", { ns: "mainReviews" }),
						}}
					/>
					<Reviews />
				</div>
			</div>

			<div className='section section__level section__bg'>
				<div className='container'>
					<div className='level__banner'>
						<div className='level__banner--left'>
							<div
								className='section__title'
								dangerouslySetInnerHTML={{
									__html: t("title", { ns: "mainLevel" }),
								}}
							/>
							<div
								className='level__banner--desc'
								dangerouslySetInnerHTML={{
									__html: t("desc", { ns: "mainLevel" }),
								}}
							/>
							<div className='level__banner--link section__link'>
								<Link href={Routes.education}>
									<a className='link__btn'>{t("link", { ns: "mainLevel" })}</a>
								</Link>
							</div>
						</div>
						<div className='level__banner--right'>
							<img src='/img/level__banner__img.png' />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(
				locale as string,
				[
					"main",
					"mainAbout",
					"mainWork",
					"mainBadge",
					"mainRegistry",
					"mainReviews",
					"mainLevel",
					"headerMenu",
					"training",
				],
				nextI18NextConfig
			)),
		},
	};
};

export default Home;
