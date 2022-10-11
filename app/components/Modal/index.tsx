import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {createPortal} from "react-dom";
import styles from "./styles.module.scss"

type Props = {
  isShow: boolean,
  handleClose: () => void,
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({isShow, handleClose, children}) => {
  const [isRenderedOnServerSide, setIsRenderedOnServerSide] = useState<boolean>(false)

  useEffect(() => {
    setIsRenderedOnServerSide(true)
  },[])

  if(!isRenderedOnServerSide) return null
  return createPortal(
    <div className={classNames(styles.modal, {"d-none": !isShow})}>
      <div className={styles.modalContainer}>
        <div className={styles.modalControls} onClick={handleClose}/>
        <div className={styles.modalMain}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!!)
}

export default Modal
