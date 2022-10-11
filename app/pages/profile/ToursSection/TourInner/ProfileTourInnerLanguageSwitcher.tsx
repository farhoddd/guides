import React from "react";
import styles from "./styles.module.scss"

type Props = {
  selectedLanguage: string,
  switchLanguage: (event: any) => void
}

const ProfileTourInnerLanguageSwitcher: React.FC<Props> = ({selectedLanguage, switchLanguage}) => {

  return (
    <div className={styles.tourGeneralInformationLanguage}>
      Показать информацию на
      <select name="languageSelect" value={selectedLanguage} onChange={switchLanguage}>
        <option value="ru">Русский</option>
        <option value="kz">Казахский</option>
        <option value="en">Английский</option>
      </select>
    </div>
  )
}

export default ProfileTourInnerLanguageSwitcher
