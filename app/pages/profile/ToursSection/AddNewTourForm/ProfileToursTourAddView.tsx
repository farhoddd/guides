import React, {useState} from "react";
import styles from "./styles.module.scss"
import {useForm} from "react-hook-form";
import classNames from "classnames";
import Button from "../../../../components/Form/Button/Button";
import FormControl from "../../../../components/Form/FormControl";
import FormLabel from "../../../../components/Form/FormLabel";
import InputSelect from "../../../../components/Form/Select";
import ProfileTourInformation from "./ProfileTourInformation";
import {IAddNewTour} from "../../../../constants/interfaces";
import useRegions from "../../../../hooks/useRegions";
import ProfileTourGallery from "./ProfileTourGallery";
import ProfileTourBaseImage from "./ProfileTourBaseImage";
import ProfileTourChangeLanguageTab from "./ProfileTourChangeLanguageTab";
import {yupResolver} from "@hookform/resolvers/yup";
import {TourAddSchema} from "../../../../constants/validation";
import FormErrorMessage from "../../../../components/Form/FormErrorMessage";
import {GuideService} from "../../../../services/GuideService";
import {convertObjectToFormData, displaySuccessMessage} from "../../../../utils/helpers";
import {useLoadingContext} from "../../../../context/loading";
import useCategories from "../../../../hooks/useCategories";

type Props = {
  closeAddNewTourForm: () => void
}

const ProfileToursTourAddView: React.FC<Props> = ({closeAddNewTourForm}) => {
  const {formState, register, handleSubmit, control, setValue} = useForm<IAddNewTour>({
    mode: "onSubmit",
    resolver: yupResolver(TourAddSchema)
  })
  const {errors, isSubmitting} = formState
  const [regions] = useRegions()
  const [categories] = useCategories()
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ru")
  const {isLoading, setIsLoading} = useLoadingContext()

  const handleSubmitForm = (data: IAddNewTour) => {
    const formData = convertObjectToFormData({
      ...data,
      langs: ["ru", "kz", "en"],
      image: data.image[0]
    })
    setIsLoading(true)
    GuideService.addNewTour(formData)
      .then(response => {
        displaySuccessMessage("Новый тур успешно добавлен!")
        closeAddNewTourForm()
      })
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }

  const onTabChange = (language: string) => {
    setSelectedLanguage(language)
  }

  return <div className={styles.newTour}>
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="row">
        <div className={classNames("col-md-6", styles.newTourForm)}>
          <div className={styles.newTourFormTabs}>
            {["ru", "kz", "en"].map((item, index) =>
              <ProfileTourChangeLanguageTab
                key={index}
                active={item === selectedLanguage}
                title={item}
                onTabChange={() => onTabChange(item)}/>
            )}
          </div>
          {selectedLanguage === "ru" && <ProfileTourInformation errors={errors} language="ru" register={register}/>}
          {selectedLanguage === "kz" && <ProfileTourInformation errors={errors} language="kz" register={register}/>}
          {selectedLanguage === "en" && <ProfileTourInformation errors={errors} language="en" register={register}/>}
          <FormControl>
            <FormLabel>Категория маршрута</FormLabel>
            <InputSelect
              register={{...register('category_id')}}
              placeholder="Категория маршрута"
              options={categories}
              control={control}/>
            <FormErrorMessage>{errors.region_id?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Область, город</FormLabel>
            <InputSelect
              register={{...register('region_id')}}
              placeholder="Область, город"
              options={regions}
              control={control}/>
            <FormErrorMessage>{errors.region_id?.message}</FormErrorMessage>
          </FormControl>
          <ProfileTourGallery setValue={setValue} errors={errors} register={register}/>
          <Button disabled={isSubmitting} className={styles.newTourFormSubmit}>
            Добавить
          </Button>
          <Button onClick={closeAddNewTourForm}>
            Отмена
          </Button>
        </div>
        <div className={classNames("col-md-5 offset-md-1", styles.newTourImageUpload)}>
          <ProfileTourBaseImage setValue={setValue} errorMessage={errors.image?.toString()} register={register}/>
        </div>
      </div>
    </form>
  </div>
}

export default ProfileToursTourAddView
