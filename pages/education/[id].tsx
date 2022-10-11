import React from "react";
import {GetStaticProps, NextPage} from "next";
import Wrapper from "../../app/components/Wrapper";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {EducationModule} from "../../app/types/types";
import EducationItem from "../../app/pages/education/EducationItem";

const EducationItemPage: NextPage = () => {

  const educationItem: EducationModule = {
    id: 1,
    isOwned: true,
    name: 'Основные правила проведения и подготовки экскурсий',
    imagePath: '/img/education/education__item-1.jpg',
    about: 'В рамках данного курса вы узнаете основные правила создания экскурсии: какие этапы необходимо пройти, чтобы экскурсия получилась интересной и качественной. Мы рассмотрим экскурсионные разновидности и типы аудиторий, знание которых поможет понять нужды и ожидания слушателей.\n' +
      '\n' +
      'Вы также сможете подробно ознакомиться с построением технологической карты на примере реальной пешеходной экскурсии, изучить методологические и организационные нюансы проведения экскурсий.\n' +
      '\n' +
      'А бонусом мы рассмотрим язык тела экскурсовода и его значение для установления наилучшего контакта с экскурсантами.'
  }

  const sampleQuestions = [
    {summary:'the capital of Canada?', answer:'Ottawa baby!!'},
    {summary:'the life span of a bowhead whale?', answer:'Over 200 years!!'},
    {summary:'the most visited city in the world?', answer:'London, groovy baby!!'},
    {summary:'the warmest ocean?', answer:'Indian Ocean, it\'s a hottie!'},
    {summary:'the one thing ron swanson hates more than lying?', answer:'Skim milk, which is water that\'s lying about being milk'}
  ];

  return (
    <Wrapper>
      <EducationItem courseProgram={sampleQuestions} {...educationItem}/>
    </Wrapper>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '1'}},
      {params: {id: '2'}},
    ], fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (
  {
    locale
  }
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ['headerMenu', 'system', 'education', 'registry', 'alphabet'],
        nextI18NextConfig
      )),
    },
  }
}

export default EducationItemPage
