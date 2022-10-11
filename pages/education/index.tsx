import React from "react";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import Wrapper from "../../app/components/Wrapper";
import {useTranslation} from "next-i18next";
import NavigationBack from "../../app/components/NavigationBack";
import EducationBanner from "../../app/pages/education/EducationBanner";
import EducationItemsList from "../../app/pages/education/EducationItemsList";
import {EducationModule} from "../../app/types/types";

const EducationPage: NextPage<any> = () => {
  const {t} = useTranslation(['education'])

  const educationItems: EducationModule[] = [
    {
      id: 1,
      isOwned: false,
      name: 'Основные правила проведения и подготовки экскурсий',
      imagePath: '/img/education/education__item-1.jpg',
      about: '\'В рамках данного курса вы узнаете основные правила создания экскурсии: какие этапы необходимо пройти, чтобы экскурсия получилась интересной и качественной. Мы рассмотрим экскурсионные разновидности и типы аудиторий, знание которых поможет понять нужды и ожидания слушателей.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'Вы также сможете подробно ознакомиться с построением технологической карты на примере реальной пешеходной экскурсии, изучить методологические и организационные нюансы проведения экскурсий.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'А бонусом мы рассмотрим язык тела экскурсовода и его значение для установления наилучшего контакта с экскурсантами.\''
    },
    {
      id: 2,
      isOwned: true,
      name: 'Основные правила проведения и подготовки экскурсий',
      imagePath: '/img/education/education__item-1.jpg',
      about: '\'В рамках данного курса вы узнаете основные правила создания экскурсии: какие этапы необходимо пройти, чтобы экскурсия получилась интересной и качественной. Мы рассмотрим экскурсионные разновидности и типы аудиторий, знание которых поможет понять нужды и ожидания слушателей.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'Вы также сможете подробно ознакомиться с построением технологической карты на примере реальной пешеходной экскурсии, изучить методологические и организационные нюансы проведения экскурсий.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'А бонусом мы рассмотрим язык тела экскурсовода и его значение для установления наилучшего контакта с экскурсантами.\''
    },
    {
      id: 2,
      isOwned: true,
      name: 'Основные правила проведения и подготовки экскурсий',
      imagePath: '/img/education/education__item-1.jpg',
      about: '\'В рамках данного курса вы узнаете основные правила создания экскурсии: какие этапы необходимо пройти, чтобы экскурсия получилась интересной и качественной. Мы рассмотрим экскурсионные разновидности и типы аудиторий, знание которых поможет понять нужды и ожидания слушателей.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'Вы также сможете подробно ознакомиться с построением технологической карты на примере реальной пешеходной экскурсии, изучить методологические и организационные нюансы проведения экскурсий.\\n\' +\n' +
        '      \'\\n\' +\n' +
        '      \'А бонусом мы рассмотрим язык тела экскурсовода и его значение для установления наилучшего контакта с экскурсантами.\''
    },
  ]

  return (
    <Wrapper>
      <div className="container">
        <NavigationBack returnBackText="Назад"/>
        <EducationBanner/>
        <div>
          <EducationItemsList educationItems={educationItems}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default EducationPage

export const getStaticProps: GetStaticProps = async (
  {
    locale
  }
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ['headerMenu', 'system', 'education'],
        nextI18NextConfig
      )),
    },
  }
}
