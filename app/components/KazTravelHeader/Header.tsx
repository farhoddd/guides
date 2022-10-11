import React, {useEffect, useState} from 'react'
import {sections} from './headerData'
import classNames from "classnames";

const KazTravelHeader = () => {
	const [isOpened, setIsOpened] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [activeSection, setActiveSection] = useState<number |null>(1)

	useEffect(() => {
		const handleResize = () => {
			if(window.innerWidth <= 560) {
				setActiveSection(null)
				setIsMobile(true)
			}
			else{
				setActiveSection(1)
				setIsMobile(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleClick = () => {
		setIsOpened(prevState => !prevState)
	}

	const handleChangeActiveSection = (index: number | null) => {
		setActiveSection(index)
	}

	return (
		<>
			<div className="kaztravel-header">
				<div className="kaztravel-header-top">
					<img
						src="/img/kaztravelheader/logo-kt-full.png"
						alt="KazTourism"/>
					<div className="kaztravel-header-top-open" onClick={handleClick}>
						<div className={classNames('kaztravel-header-top-open-item open-item-1', {"open-item-active": isOpened})}/>
						<div className={classNames('kaztravel-header-top-open-item open-item-2', {"open-item-active": isOpened})}/>
						<div className={classNames('kaztravel-header-top-open-item open-item-3', {"open-item-active": isOpened})}/>
					</div>
				</div>
				<div className="kaztravel-header-menu"
						 style={{
							 "top": isOpened ? "72px" : "-200vh",
							 backgroundImage: `url("/img/kaztravelheader/circle-background.png")`
						 }}
				>
					<div className="kaztravel-header-sideblock">
						{sections.map((section, index) => (
							<div className={classNames('kaztravel-header-sideblock-item', {
								"kaztravel-header-sideblock-item-active": activeSection === index + 1
							})}
									 onClick={() => handleChangeActiveSection(index + 1)}
									 key={section.title}>
								{section.title}
								{isMobile && (
									<svg className="kaztravel-header-content-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M10 13.3333L13.3333 10L10 6.66667" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M6.66663 10H13.3333" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								)}
							</div>
						))}
					</div>
					<div className="kaztravel-header-content" style={{zIndex: activeSection !== null ? 2 : -2}}>
						{isMobile && (
							<a className="kaztravel-header-content-item-back" onClick={() => handleChangeActiveSection(null)}>
								Назад
								<svg className="kaztravel-header-content-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M10 13.3333L13.3333 10L10 6.66667" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M6.66663 10H13.3333" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
						)}
						{activeSection ? sections[activeSection - 1].modules.map((module, index) => (
							<a href={module.link} className="kaztravel-header-content-item" key={index}>
								<div className="kaztravel-header-content-item-title">
									{module.title}
									<svg className="kaztravel-header-content-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M10 13.3333L13.3333 10L10 6.66667" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M6.66663 10H13.3333" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
								<div className="kaztravel-header-content-item-subtitle">{module.subtitle}</div>
							</a>
						)): null}
					</div>
				</div>
			</div>
			<div style={{width: "100%", height: "72px"}}/>
		</>
	)
}

export default KazTravelHeader
