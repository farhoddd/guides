import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import {useTranslation} from "next-i18next";
import ProfileTourInnerLanguageSwitcher from "./ProfileTourInnerLanguageSwitcher";

type Props = {
  locales: {
    locale: "kz" | "ru" | "en",
    name: string,
    route_description?: string | null | undefined
    additional_information?: string | null | undefined
  }[],
  regionName: string,
  categoryName: string
}

const ProfileTourInnerGeneralInformation: React.FC<Props> = ({locales, regionName, categoryName}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")
  const {t, i18n} = useTranslation()

  useEffect(() => {
    setSelectedLanguage(i18n.language)
  }, [])

  const getTourName = () => {
    return locales.find(locale => locale.locale === selectedLanguage)?.name ?? "Не указано"
  }

  const getTourDescription = () => {
    return locales.find(locale => locale.locale === selectedLanguage)?.route_description ?? "Не указано"
  }

  const getTourAdditionalInformation = () => {
    return locales.find(locale => locale.locale === selectedLanguage)?.additional_information ?? "Не указано"
  }

  const switchLanguage = (event: any) => setSelectedLanguage(event.target.value)

  return (
    <div className={styles.tourGeneralInformation}>
      <h4>Основная информация о туре</h4>
      <ProfileTourInnerLanguageSwitcher
        selectedLanguage={selectedLanguage}
        switchLanguage={switchLanguage}/>
      <p>
        Название тура: <span>{getTourName()}</span>
      </p>
      <p>
        Описание тура: <span>{getTourDescription()}</span>
      </p>
      <p>
        Дополнительная информация тура: <span>{getTourAdditionalInformation()}</span>
      </p>
      <p>
        Регион: <span>{regionName}</span>
      </p>
      <p>
        Категория: <span>{categoryName}</span>
      </p>
    </div>
  )
}

export default ProfileTourInnerGeneralInformation
