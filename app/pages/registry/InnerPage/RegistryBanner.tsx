import React, {useState} from "react";
import RegistryInfo from "./RegistryInfo";
import RegistryBackground from "./RegistryBackground";
import RegistrySocial from "./RegistrySocial";
import RegistryModal from "./RegistryModal";
import {User, UserTour} from "../../../types/types";
import RegistryAvatar from "./RegistryAvatar";

type Props = {
  guide: User,
  guideTours: UserTour[]
}

const RegistryBanner: React.FC<Props> = ({guide, guideTours}) => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <div className="registry__page">
      <div className="registry__page--left">
        <RegistryAvatar image={guide.image}/>
      </div>

      <div className="registry__page--right">
        <RegistryBackground/>
        <RegistryInfo
          activityName={guide.guide_card?.activity?.name}
          fullName={`${guide.surname} ${guide.name}`}
          rating={guide.guide_card?.rating}
          experience={guide.guide_card?.experience}
          regionName={guide.guide_card?.region_of_service?.name}
          email={guide.email}
          phone={guide.phone}
          languages={guide?.guide_card?.languages}
        />
        <div className="registry__bookguide">
          <a className="bookguide--link link__btn" onClick={handleOpenModal}>
            Забронировать гида
          </a>
        </div>
      </div>
      <RegistrySocial/>
      <RegistryModal
        guideTours={guideTours}
        guideId={guide.id}
        isShow={showModal}
        closeModal={handleCloseModal}/>
    </div>
  )
}

export default RegistryBanner
