import React from "react";
import {Language} from "../../../types/types";
import exp from "constants";

type Props = {
  activityName: string,
  fullName: string,
  rating: number,
  experience: number,
  regionName: string,
  email: string,
  phone: string,
  languages: Language[] | undefined
}

const RegistryInfo: React.FC<Props> = ({
                                         activityName,
                                         fullName,
                                         regionName,
                                         email,
                                         experience,
                                         languages,
                                         phone,
                                         rating
                                       }) => {

  return (
    <div className="registry__page--info">
      <div className="registry__info--position">
        {activityName}
      </div>
      <div className="registry_page__title--block">
        <h1 className="registry__info--title">
          {fullName}
        </h1>
        <div className="registry__info--rating">
          {rating || '0'}
        </div>
      </div>
      <div className="registry__info--second-info">
        <div className="registry__info--experience">
          {experience ? `стаж ${experience} лет` : 'Стаж не указан'}
        </div>
        <div className="registry__info--city">
          <div className="registry__city--icon">
            <img src="/img/map-marker-white.svg"/>
          </div>
          <div className="registry__city--text">
            {regionName || 'Регион не указан'}
          </div>
        </div>
      </div>
      <div className="registry__info--contacts">
        <div className="registry__contact--item registry__contact--mail">
          <a href="mailto:mariya@gmail.com">
            <img src="/img/mail-icon.svg"/> {email || 'Данные отсутствуют'}
          </a>
        </div>
        <div className="registry__contact--item registry__contact--phone">
          <a href="tel:+7 (702) 999 19 86">
            <img src="/img/phone-icon.svg"/> {phone || 'Данные отсутствуют'}
          </a>
        </div>
      </div>
      <div className="registry__info--price-block">
        <div className="registry__price--title">
          Знание языков
        </div>
        <div className="registry__price--list">
          {languages && languages.map((language, index) => (
            <div className="registry__price--item" key={index}>
              {language.name}
            </div>
          ))}
          {(!languages || languages.length === 0) && <div className="registry__price--item">Данные отсутствуют</div>}
        </div>

      </div>
    </div>
  )
}

export default RegistryInfo
