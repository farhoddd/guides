import React, {useEffect, useState} from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import Wrapper from "../../app/components/Wrapper";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import classNames from "classnames";
import EgovVerifyForm from "../../app/pages/registration/EgovVerifyForm";
import UserDataFillForm from "../../app/pages/registration/UserDataFillForm";
import ELicenseForm from "../../app/pages/registration/ELicenseForm";
import {IUserDataFromEgovModel} from "../../app/constants/interfaces";
import withRequireGuest from "../../app/hoc/withRequireGuest";

const RegistrationPage: NextPage = () => {
  const {t} = useTranslation(['registration', 'system'])
  const router = useRouter()
  const [activeStage, setActiveStage] = useState(0)
  const [userDataFromEgov, setUserDataFromEgov] = useState<IUserDataFromEgovModel>()

  useEffect(() => {
    if(userDataFromEgov){
      setActiveStage(1)
    }
  }, [userDataFromEgov])

  const returnBack = () => {
    router.back()
  }

  return (
    <Wrapper>
      <div className="page__title--block">
        <div className="container">

          <div className="section__title--block">
            <a onClick={returnBack} className="section__title--arrow">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.375 23.25L11.625 15.5L19.375 7.75" stroke="#0E1839" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              <span>{t('back', {ns: "system"})}</span>
            </a>
          </div>

        </div>
      </div>

      <div className="section section--page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">

              <div className="registration__stages">
                <div
                  className={classNames("registration__stage--item registration__stage--1", {'registration__stage--active': activeStage === 0})}>
                <span>
                    1
                </span>
                </div>
                <span className="registration__stage--line"/>
                <div
                  className={classNames("registration__stage--item registration__stage--2", {'registration__stage--active': activeStage === 1})}>
                <span>
                    2
                </span>
                </div>
                <span className="registration__stage--line"/>
                <div
                  className={classNames("registration__stage--item registration__stage--3", {'registration__stage--active': activeStage === 2})}>
                  <span>
                    3
                </span>
                </div>
              </div>

            </div>

            <div className="col-lg-12">
              <div className="registration__block">
                <div className="login__block--form">
                  <div className="registration__block">
                    <div className="content__title--block">
                      <div className="content__title section__title section__title--center">
                        <strong>Регистрация</strong><br/> гида, экскурсовода, инструкторов туризма
                      </div>
                    </div>
                    {activeStage === 0 && <EgovVerifyForm setUserDataFromEgov={setUserDataFromEgov}/>}
                    {activeStage === 1 && <UserDataFillForm initialValues={{
                      activity_id: null,
                      region_of_service_id: null,
                      name: userDataFromEgov?.name || '',
                      surname: userDataFromEgov?.surname || '',
                      patronymic: userDataFromEgov?.patronymic || '',
                      tin: userDataFromEgov?.tin?.toString() || '010706550435',
                      email: userDataFromEgov?.email || '',
                      address: '',
                      phone: '',
                      password: '',
                      passwordConfirmation: ''
                    }}/>}
                    {activeStage === 2 && <ELicenseForm/>}
                  </div>
                </div>
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
        ['headerMenu', 'registration', 'system'],
        nextI18NextConfig
      )),
    },
  }
}

export default withRequireGuest(RegistrationPage)
