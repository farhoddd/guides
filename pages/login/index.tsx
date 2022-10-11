import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import Link from "next/link";
import {Routes} from "../../app/constants/routes";
import {useTranslation} from "next-i18next";
import {useForm} from "react-hook-form";
import {ISignInUserDataModel} from "../../app/constants/interfaces";
import {UserSignInSchema} from "../../app/constants/validation";
import FormControl from "../../app/components/Form/FormControl";
import FormLabel from "../../app/components/Form/FormLabel";
import Input from "../../app/components/Form/Input";
import Button from "../../app/components/Form/Button/Button";
import styles from "./styles.module.scss"
import {AuthService} from "../../app/services/AuthService";
import FormErrorMessage from "../../app/components/Form/FormErrorMessage";
import {LocalStorageHandler} from "../../app/utils/localStorageHandler";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import withRequireGuest from "../../app/hoc/withRequireGuest";

const LoginPage: NextPage = () => {
  const {t} = useTranslation(['auth, system'])
  const router = useRouter()

  const {formState, register, handleSubmit, control, getValues, setError} = useForm<ISignInUserDataModel>({
    mode: "onSubmit",
    defaultValues: {username: '', password: ''},
    resolver: yupResolver(UserSignInSchema)
  })
  const {errors, isSubmitting, isValid} = formState

  const onSubmit = (data: ISignInUserDataModel) => {
    AuthService.signInUser(data)
      .then(response => {
        if(response.data.code === 401){
          setError('password', {type: 'manual', message: 'Неверное имя пользователя или пароль'})
        }
        else if(response.data.code === 200){
          LocalStorageHandler.setUserToken(response.data.data?.token)
          router.reload()
        }
      })
      .catch(err => console.log(err.response))
  }

  return (
    <Wrapper withoutHeader className="section registration__block--section registration__block--page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <div className="registration__block">
              <div className="registration__logo">
                <Link href={Routes.home}>
                  <img src="/img/logo.svg" alt=""/>
                </Link>
              </div>
              <div className="section__title section__title--center registration__title">
                <strong>{t('title', {ns: 'auth'})}</strong>
              </div>

              <div className="registration__block--form form__block form__block--blue ">
                <div className="row">
                  <div className="col-lg-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormControl className="form__block--line">
                        <FormLabel className="text-white">{t('email', {ns: 'auth'})}</FormLabel>
                        <Input placeholder={t('email', {ns: 'auth'})} register={{...register('username')}}/>
                        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
                      </FormControl>
                      <FormControl className="form__block--line">
                        <FormLabel className="text-white">{t('password', {ns: 'auth'})}</FormLabel>
                        <Input type="password" placeholder={t('password', {ns: 'auth'})} register={{...register('password')}}/>
                        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
                      </FormControl>
                      <FormControl className={styles.loginSubmit}>
                        <Button>{t('login', {ns: 'auth'})}</Button>
                      </FormControl>
                    </form>
                  </div>
                </div>
              </div>
              <div className="form__listitem--registr">
                <Link href={Routes.registration}>
                  <a>{t('registration', {ns: 'system'})}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ['auth', 'system'],
        nextI18NextConfig
      )),
    },
  }
}

export default withRequireGuest(LoginPage)
