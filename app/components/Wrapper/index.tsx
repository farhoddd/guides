import Head from 'next/head'
import React, {useEffect, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import {AuthContext} from "../../context/auth";
import {useLoadingContext} from '../../context/loading';
import Preloader from "../Preloader/Preloader";
import useUserInfo from "../../hooks/useUserInfo";
import {useRouter} from "next/router";
import {Routes} from "../../constants/routes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import KazTravelHeader from "../KazTravelHeader/Header";

type Props = {
  children: React.ReactNode,
  title?: string,
  withoutHeader?: boolean,
  className?: string,
  requireAuth?: boolean
}

const Wrapper: React.FC<Props> = ({children, title, withoutHeader, className, requireAuth}) => {
  const {isLoading, setIsLoading} = useLoadingContext()

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <title key="title">
          {title ? title : "Guides Kazakhstan Travel"}
        </title>
      </Head>
      <KazTravelHeader/>
      {isLoading && <Preloader/>}
      {!withoutHeader && <Header/>}
      <section className={className ? className : "wrap__content"}>
        {children}
      </section>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default React.memo(Wrapper)
