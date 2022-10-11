import React from "react";
import styles from "./styles.module.scss"

type Props = {
  name: string,
  handleRemove: (id: number) => void,
  id: number
}

const ProfileAddedLanguageItem: React.FC<Props> = ({name, handleRemove, id}) => {

  const removeLanguage = () => handleRemove(id)

  return <div className={styles.language}>
    {name}
    <div className={styles.languageControls} onClick={removeLanguage}/>
  </div>
}

export default ProfileAddedLanguageItem
