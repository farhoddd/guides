import React, {useState} from "react";
import FileInput from "../../../../components/Form/FileInput";
import CameraIcon from "../../../../icons/CameraIcon";
import styles from "./styles.module.scss";
import FormControl from "../../../../components/Form/FormControl";
import {UseFormRegister} from "react-hook-form";
import {IAddNewTour} from "../../../../constants/interfaces";
import FormErrorMessage from "../../../../components/Form/FormErrorMessage";

type Props = {
  register: UseFormRegister<IAddNewTour>,
  errorMessage?: string,
  setValue: any
}

const placeholder = (
  <div className={styles.newTourBaseImagePlaceholder}>
    <div>
      <CameraIcon/>
    </div>
    Загрузить главное фото
  </div>
)

const ProfileTourBaseImage: React.FC<Props> = ({register, errorMessage, setValue}) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>()

  const takeUploadedImage = (files: File[]) => {
    setUploadedImage(files[0])
    setValue('image', [...files])
  }

  const removeImage = () => {
    setUploadedImage(null)
    setValue('image', [])
  }

  return (
    <>
      <FormControl>
        <FileInput
          name="image"
          multiple={false}
          accept="image/*"
          hideAttachedFileNames={true}
          placeholder={placeholder}
          afterImageUpload={takeUploadedImage}
          handleChange={takeUploadedImage}
          className={styles.newTourBaseImage}/>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
      {uploadedImage &&
        <div className={styles.newTourBaseImageUploaded}>
          <img src={URL.createObjectURL(uploadedImage)} alt="baseImage"/>
          <div className={styles.newTourBaseImageUploadedRemove}>
            <button onClick={removeImage}/>
          </div>
        </div>
      }
    </>
  )
}

export default React.memo(ProfileTourBaseImage)
