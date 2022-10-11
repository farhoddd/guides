import React, {SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {AuthService} from "../../services/AuthService";
import {useLoadingContext} from "../../context/loading";
import {displayErrorMessage} from "../../utils/helpers";

declare const window: any

type Props = {
  setUserDataFromEgov: any
}

const EgovVerifyForm: React.FC<Props> = ({setUserDataFromEgov}) => {
  const [errorMessage, setErrorMessage] = useState("")
  const {isLoading, setIsLoading} = useLoadingContext()

  useEffect(() => {
    window.ncalayer_websocket = new WebSocket("wss://127.0.0.1:13579/");
    window.ncalayer_websocket.onopen = () => {
      window.ncalayer_ready = true;
    };
    window.ncalayer_websocket.onmessage = (event: MessageEvent) => {
      const response = JSON.parse(event.data);
      if (response.responseObject) {
        setIsLoading(true)
        AuthService.getDataFromEgov({
          ecp: response.responseObject
        })
          .then(response => {
            setUserDataFromEgov(response.data?.data)
          })
          .catch(err => {
            console.log(err.response)
            setErrorMessage("Произошла ошибка на сервере!")
          })
          .finally(() => setIsLoading(false))
      }
    };
  }, [])

  const onPki = (event: SyntheticEvent) => {
    event.preventDefault();
    if (window.ncalayer_ready) {
      const data = {
        module: "kz.gov.pki.knca.commonUtils",
        method: "signXml",
        args: [
          "PKCS12",
          "AUTHENTICATION",
          "<login><sessionid>caacda70-fd36-45ed-8d94-45a88890f83a</sessionid></login>",
          "",
          "",
        ],
      };
      window.ncalayer_websocket.send(JSON.stringify(data));
    } else {
      alert("Убедитесь, что программа NCALayer запущена");
    }
  }

  return (
    <div className="registration__block--stage registration__block--stage-1 registration__stagetab--active">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-md-12">
          <div className="form__block--line registration__ecp--line">
            <div className="form__block--input">
              <label className="form__file input--error">
                <div className="form__file--title" onClick={onPki}>
                  Загрузить ЭЦП
                  <img src="/img/file-icon.svg" alt="#"/>
                </div>
              </label>
              {errorMessage && <span className="input-required text-center">{errorMessage}</span>}
            </div>
          </div>
          <div className="registration__ecp--desc">
            Для регистрации необходимо авторизоваться с помощью электронно-цифрового ключа (ЭЦП) туристического
            оператора.
          </div>
        </div>
      </div>

    </div>
  )
}

export default EgovVerifyForm
