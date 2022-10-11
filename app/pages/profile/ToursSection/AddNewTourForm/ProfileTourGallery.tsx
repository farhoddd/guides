import React, {useRef, useState} from "react";
import styles from "./styles.module.scss"
import ProfileTourGalleryImage from "./ProfileTourGalleryImage";
import FormControl from "../../../../components/Form/FormControl";
import FormLabel from "../../../../components/Form/FormLabel";
import FileInput from "../../../../components/Form/FileInput";
import GalleryIcon from "../../../../icons/GalleryIcon";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {IAddNewTour} from "../../../../constants/interfaces";
import {v4 as uuidv4} from 'uuid';
import FormErrorMessage from "../../../../components/Form/FormErrorMessage";

type Props = {
  register: UseFormRegister<IAddNewTour>,
  errors: FieldErrors<IAddNewTour>,
  setValue: any
}

const ProfileTourGallery: React.FC<Props> = ({register, errors, setValue}) => {
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])

  const takeUploadedImages = (files: File[]) => {
    setAttachedFiles([...attachedFiles, ...files])
  }

  const removeImageFromGallery = (index: number) => {
    const files = [...attachedFiles]
    files.splice(index, 1)
    setAttachedFiles(files)
    setValue('images', files, { shouldDirty: true, shouldTouch: true })
  }

  const uploadImageToGallery = (files: File[]) => {
    const uploadedFiles = [...attachedFiles, ...files]
    setAttachedFiles(uploadedFiles)
    setValue('images', uploadedFiles)
  }

  return (
    <>
      <FormControl>
        <FormLabel>Карусель изображений</FormLabel>
        <FileInput
          handleChange={uploadImageToGallery}
          multiple={true}
          name="gallery"
          hideAttachedFileNames={true}
          placeholder="Выберите картинку"
          icon={<GalleryIcon/>}
          accept="image/*"
          afterImageUpload={takeUploadedImages}
          className={styles.newTourCarousel}/>
      </FormControl>
      <FormControl>
        {attachedFiles.length > 0 && (
          <div className={styles.newTourGallery}>
            {attachedFiles.map((image, index) =>
              <ProfileTourGalleryImage
                removeItemFromGallery={() => removeImageFromGallery(index)}
                image={image}
                key={uuidv4()}/>
            )}
          </div>
        )}
        {attachedFiles.length === 0 && <div className={styles.newTourGalleryEmpty}>Файлы не прикреплены</div>}
        <FormErrorMessage>{errors?.images?.toString()}</FormErrorMessage>
      </FormControl>
    </>
  )
}

export default React.memo(ProfileTourGallery)
