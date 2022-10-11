import React from "react";
import NavigationBack from "../../../components/NavigationBack";
import RegistryBanner from "./RegistryBanner";
import { User, UserTour } from "../../../types/types";
import styles from "./styles.module.scss";

type Props = {
	guide: User;
	guideTours: UserTour[];
};

const RegistryInner: React.FC<Props> = ({ guide, guideTours }) => {
	// console.log("guide", guide.guide_card.about);
	// console.log("guideTours", guideTours);
	type aboutType = {};
	const { about }: aboutType = guide.guide_card;

	return (
		<div>
			<NavigationBack />
			<div className={styles.registryBanner}>
				<RegistryBanner guide={guide} guideTours={guideTours} />
			</div>
			<div className={styles.registryAbout}>
				<h2 className={styles.registryAboutTitle}>О гиде</h2>
				<div className={styles.registryAboutContent}>
					<p>{about}</p>
					{/* <p>
						Родилась в г. Алматы, окончила школу и университет в г. Кокшетау,
						живу в Астане с 2007 года. Люблю путешествовать и открывать новые
						горизонты, познавать культуру разных стран и рассказывать о нашей
						Родине, поэтому я и выбрала работу гидом, которую я называю
						«путешествием в краю, в котором живу». Имею два высших образования.
					</p>

					<p>
						К работе гидом я пришла, имея опыт работы в нефтегазовой и
						инвестиционной отраслях:
						<li>
							Аналитик по связям с инвесторами АО «Разведка Добыча
							«КазМунайГаз», (2008-2011, Астана)
						</li>
						<li>
							Волонтер в международном проекте Solidarite Jeunesses (2012,
							Франция)
						</li>
						<li>
							Помощник главного акционера АО «Verny Investments Holding»
							(2012-2014, Астана)
						</li>
						<li>
							Гид-переводчик (экскурсии на русском, английском и французском
							языках, первые группы с 2012 года, постоянная работа гидом с 2014
							года в Алматы).
						</li>
					</p>

					<p>
						Состою в реестре гидов Комитета индустрии туризма МКС РК (рег.номер
						Э-009 от 24.04.16)
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default RegistryInner;
