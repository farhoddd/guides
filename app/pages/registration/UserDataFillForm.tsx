import React from "react";
import {useTranslation} from "next-i18next";
import {ISignUpUserDataModel} from "../../constants/interfaces";
import {useForm} from "react-hook-form";
import FormControl from "../../components/Form/FormControl";
import FormLabel from "../../components/Form/FormLabel";
import Input from "../../components/Form/Input";
import FormErrorMessage from "../../components/Form/FormErrorMessage";
import {AuthService} from "../../services/AuthService";
import InputSelect from "../../components/Form/Select";
import Button from "../../components/Form/Button/Button";
import {LocalStorageHandler} from "../../utils/localStorageHandler";
import {useAuthContext} from "../../context/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserSignUpSchema} from "../../constants/validation";
import useActivities from "../../hooks/useActivities";
import useRegions from "../../hooks/useRegions";
import {useRouter} from "next/router";
import {Routes} from "../../constants/routes";
import {setValidationErrors} from "../../utils/helpers";
import {useLoadingContext} from "../../context/loading";

type Props = {
  initialValues: ISignUpUserDataModel,
}

const UserDataFillForm: React.FC<Props> = ({initialValues}) => {
  const {t} = useTranslation(['registration'])
  const {formState, register, handleSubmit, control, getValues, setError} = useForm<ISignUpUserDataModel>({
    mode: "onSubmit",
    defaultValues: initialValues,
    resolver: yupResolver(UserSignUpSchema)
  })
  const {errors, isSubmitting, isValid} = formState
  const [activities] = useActivities()
  const [regions] = useRegions()
  const {user, updateUserInfo} = useAuthContext()
  const {isLoading, setIsLoading} = useLoadingContext()
  const router = useRouter()

  const onSubmitForm = (data: ISignUpUserDataModel) => {
    setIsLoading(true)
    AuthService.signUpUserData({...data, type: 'ecp'})
      .then(response => {
        updateUserInfo(response.data.data?.user)
        LocalStorageHandler.setUserToken(response.data.data?.token)
        router.push(Routes.profile)
      })
      .catch(err => {
        if(err.response.status === 422){
          setValidationErrors(err.response.data?.messages || {}, setError)
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="registration__block--stage registration__block--stage-2 registration__stagetab--active">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-12">
          <div className="registration__block--form form__block form__block--blue">
            <div className="content__title--block">
              <div className="form__registration--title">Заполните данные</div>
            </div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="name">{t('name')}</FormLabel>
                <Input disabled placeholder={t('name')} register={{...register('name')}}/>
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="surname">{t('surname')}</FormLabel>
                <Input disabled placeholder={t('surname')} register={{...register('surname')}}/>
                <FormErrorMessage>{errors.surname?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="patronymic">{t('patronymic')}</FormLabel>
                <Input disabled placeholder={t('patronymic')} register={{...register('patronymic')}}/>
                <FormErrorMessage>{errors.patronymic?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="region_of_service_id">{t('region')}</FormLabel>
                <InputSelect placeholder="Регион" control={control} options={regions} register={{...register('region_of_service_id')}}/>
                <FormErrorMessage>{errors.region_of_service_id?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="address">{t('address')}</FormLabel>
                <Input placeholder={t('address')} register={{...register('address')}}/>
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="activity_id">{t('category')}</FormLabel>
                <InputSelect placeholder="Категория гида" control={control} options={activities} register={{...register('activity_id')}}/>
                <FormErrorMessage>{errors.activity_id?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="email">{t('mail')}</FormLabel>
                <Input placeholder={t('mail')} register={{...register('email')}}/>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="phone">{t('phone')}</FormLabel>
                <Input type="phone" placeholder={t('phone')} register={{...register('phone')}}/>
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="password">{t('password')}</FormLabel>
                <Input type="password" placeholder={t('password')} register={{...register('password')}}/>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="form__block--line">
                <FormLabel htmlFor="passwordConfirmation">{t('passwordConfirmation')}</FormLabel>
                <Input type="password" placeholder={t('passwordConfirmation')} register={{...register('passwordConfirmation')}}/>
                <FormErrorMessage>{errors.passwordConfirmation?.message}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                disabled={isSubmitting}
              >
               Следующий шаг
              </Button>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataFillForm
