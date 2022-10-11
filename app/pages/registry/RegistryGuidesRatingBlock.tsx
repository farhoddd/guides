import React from "react";
import styles from "./styles.module.scss";
import RegistrySlider from "./RegistrySlider";
import { useTranslation } from "next-i18next";
import classNames from "classnames";

const RegistryGuidesRatingBlock: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div
			className={classNames(
				styles.rating,
				"section__block section__block--shadow"
			)}
		>
			<div className='section__block--title'>
				{t("top", { ns: "registry" })}
			</div>
			<div className='registry__top--block'>
				<RegistrySlider />
			</div>
		</div>
	);
};

export default RegistryGuidesRatingBlock;
