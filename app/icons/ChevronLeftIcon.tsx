import React, {MouseEventHandler} from "react";

type Props = {
  onClick?: MouseEventHandler
}

const ChevronLeftIcon: React.FC<Props> = ({onClick}) => {

  return <svg onClick={onClick} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.375 23.25L11.625 15.5L19.375 7.75" stroke="#0E1839" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round"/>
  </svg>
}

export default ChevronLeftIcon
