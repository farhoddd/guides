import React from "react";
import FacebookIcon from "../../../icons/FacebookIcon";
import styles from "./styles.module.scss";
import InstagramIcon from "../../../icons/InstagramIcon";
import TwitterIcon from "../../../icons/TwitterIcon";

const RegistrySocial: React.FC = () => {

  return (
    <div className="registry__share">
      <a href="#" className="transparent-link share-link social-vk" rel="nofollow" target="_blank">
        <FacebookIcon className={styles.registrySocial}/>
      </a>
      <a href="#" className="transparent-link share-link social-vk" rel="nofollow" target="_blank">
        <InstagramIcon className={styles.registrySocial}/>
      </a>
      <a href="#" className="transparent-link share-link social-vk" rel="nofollow" target="_blank">
        <TwitterIcon className={styles.registrySocial}/>
      </a>
    </div>
  )
}

export default RegistrySocial
