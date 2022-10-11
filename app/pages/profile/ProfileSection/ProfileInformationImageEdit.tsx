import React, {useState} from "react";
import {User} from "../../../types/types";
import styles from "./styles.module.scss"
import Button from "../../../components/Form/Button/Button";
import FacebookIcon from "../../../icons/FacebookIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
import TwitterIcon from "../../../icons/TwitterIcon";
import LanguageAddModal from "./LanguageAddModal";
import {IAddNewLanguage, ILanguageAndProfileEditDataModel} from "../../../constants/interfaces";
import useLanguages from "../../../hooks/useLanguages";
import ProfileAddedLanguageItem from "./ProfileAddedLanguageItem";
import ProfileImageUpdate from "./ProfileImageUpdate";
import SocialNetworkAddModal from "./SocialNetworkAddModal";

type Props = {
  userInfo: User | null,
  profileEditData: ILanguageAndProfileEditDataModel,
  setProfileEditData: any
}

type SocialNetworkModal = 'instagram' | 'facebook' | 'twitter' | false

const ProfileInformationImageEdit: React.FC<Props> = ({userInfo, profileEditData, setProfileEditData}) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowSocialNetworkModal, setIsShowSocialNetworkModal] = useState<SocialNetworkModal>(false)
  const {languages, setLanguages} = useLanguages()
  const [socialNetworkLinks, setSocialNetworkLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: ''
  })

  const onImageUpload = (image: File) => {
    setProfileEditData({
      ...profileEditData,
      image: {document: image, link: URL.createObjectURL(image)}
    })
  }

  const closeModal = () => setIsShowModal(false)
  const openModal = () => setIsShowModal(true)

  const openSocialNetworkModal = (type: 'instagram' | 'facebook' | 'twitter') => setIsShowSocialNetworkModal(type)
  const closeSocialNetworkModal = () => setIsShowSocialNetworkModal(false)

  const updateLanguagesList = (language: IAddNewLanguage) => {
    const attachedLanguages = [...profileEditData.languages]
    attachedLanguages.push(language)
    setProfileEditData({...profileEditData, languages: attachedLanguages})
    setIsShowModal(false)
  }

  const removeFromSelectedLanguages = (id: number) => {
    const updatedListOfLanguages = [...profileEditData.languages]
      .filter(selectedLanguage => selectedLanguage.id !== id)
    setProfileEditData({...profileEditData, languages: updatedListOfLanguages})
  }

  const getLanguageName = (id: number) => [...languages].find(language => language.id === id)?.name || '-'

  return (
    <>
      <ProfileImageUpdate
        image={profileEditData.image?.link}
        onImageUpload={onImageUpload}
      />
      <div className={styles.editContent}>
        <h6 className={styles.editContentHeading}>Категория гида</h6>
        <div className={styles.editContentCategory}>{userInfo?.guide_card?.activity?.name}</div>
        <Button disabled>Повысить уровень</Button>

        <h6 className={styles.editContentHeading}>Языки</h6>
        {profileEditData.languages.length === 0 &&
          <small className={styles.editContentLanguagesEmpty}>Информация отсутствует</small>
        }
        {profileEditData.languages.length > 0 && (
          <div className={styles.editContentLanguages}>
            {profileEditData.languages.map((language, index) => (
              <ProfileAddedLanguageItem
                id={language.id}
                name={getLanguageName(language.id)}
                key={language.id}
                handleRemove={removeFromSelectedLanguages}/>
            ))}
          </div>
        )}
        <Button disabled={languages.length === 0} onClick={openModal}>Добавить язык</Button>
        <h6 className={styles.editContentHeading}>Социальные сети</h6>
        <div className={styles.editContentSocialWrapper}>
          <div className={styles.editContentSocial} onClick={() => openSocialNetworkModal('facebook')}>
            <FacebookIcon/>
          </div>
          <div className={styles.editContentSocial} onClick={() => openSocialNetworkModal('instagram')}>
            <InstagramIcon/>
          </div>
          <div className={styles.editContentSocial} onClick={() => openSocialNetworkModal('twitter')}>
            <TwitterIcon/>
          </div>
        </div>
      </div>
      <LanguageAddModal
        isShow={isShowModal}
        handleClose={closeModal}
        addedLanguages={profileEditData.languages}
        languages={languages}
        updateLanguagesList={updateLanguagesList}/>
      <SocialNetworkAddModal
        type={isShowSocialNetworkModal}
        isShow={!!isShowSocialNetworkModal}
        handleClose={closeSocialNetworkModal}/>
    </>
  )
}

export default ProfileInformationImageEdit
