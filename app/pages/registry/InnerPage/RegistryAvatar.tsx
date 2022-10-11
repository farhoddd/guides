import React from "react";

type Props = {
  image: string | null
}

const RegistryAvatar: React.FC<Props> = ({image}) => {

  return (
    <div className="registry__page--img">
      <img src={image || "/img/profile.png"}
           alt="registry"/>
    </div>
  )
}


export default RegistryAvatar
