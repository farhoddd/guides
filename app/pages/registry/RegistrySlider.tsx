import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { GuideService } from "../../services/GuideService";
import { User } from "../../types/types";
import { useLoadingContext } from "../../context/loading";
import Link from "next/link";

const RegistrySlider: React.FC = () => {
	const [guideList, setGuideList] = useState<User[]>([]);

	useEffect(() => {
		GuideService.getGuideList().then((response) => {
			const meta = response.data?.meta;

			setGuideList(response.data?.data);
		});
	}, []);

	return (
		<>
			<Swiper
				className='registry__top--slider'
				modules={[Navigation]}
				slidesPerView={4}
				spaceBetween={30}
				navigation={{
					prevEl: ".registry__arrow--prev",
					nextEl: ".registry__arrow--next",
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					400: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					520: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					645: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1366: {
						slidesPerView: 4,
					},
				}}
			>
				{guideList.map((list) => {
					return (
						<SwiperSlide key={list.id}>
							<div className='registry__top--item'>
								<div className='registry__top--left'>
									<div className='registry__top--img'>
										<Link href={`/registry/${list.id}`}>
											<a>
												<img src='/img/profile.png' alt={list.surname} />
											</a>
										</Link>
									</div>
								</div>
								<div className='registry__top--right'>
									<div className='registry__top--info'>
										<div className='registry__top--title'>
											<Link href={`/registry/${list.id}`}>
												<a>
													<span>{list.surname}</span>
													<span>{list.name}</span>
													<p>{list.patronymic}</p>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				{/* <SwiperSlide>
					<div className='registry__top--item'>
						<div className='registry__top--left'>
							<div className='registry__top--img'>
								<a>
									<img src='/img/profile.png' alt='Рахманова Мария' />
								</a>
							</div>
						</div>
						<div className='registry__top--right'>
							<div className='registry__top--info'>
								<div className='registry__top--title'>
									<a> ТОО "ALTYN CROWN KZ"</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='registry__top--item'>
						<div className='registry__top--left'>
							<div className='registry__top--img'>
								<a>
									<img src='/img/profile.png' alt='Рахманова Мария' />
								</a>
							</div>
						</div>
						<div className='registry__top--right'>
							<div className='registry__top--info'>
								<div className='registry__top--title'>
									<a> Токушев Олжас Рахимгалымович </a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='registry__top--item'>
						<div className='registry__top--left'>
							<div className='registry__top--img'>
								<a>
									<img src='/img/profile.png' alt='Рахманова Мария' />
								</a>
							</div>
						</div>
						<div className='registry__top--right'>
							<div className='registry__top--info'>
								<div className='registry__top--title'>
									<a> Левченко Милена Вадимовна</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='registry__top--item'>
						<div className='registry__top--left'>
							<div className='registry__top--img'>
								<a>
									<img src='/img/profile.png' alt='Рахманова Мария' />
								</a>
							</div>
						</div>
						<div className='registry__top--right'>
							<div className='registry__top--info'>
								<div className='registry__top--title'>
									<a>Кудайбергенов Ерлан Асанович</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
			</Swiper>
			<div className='slider__arrows--block slider__arrows--top'>
				<div className='slider__arrow registry__arrow--prev' slot='prev'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 6L9 12L15 18'
							stroke='#F19728'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
				<div className='slider__arrow registry__arrow--next' slot='next'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 18L15 12L9 6'
							stroke='#F19728'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default RegistrySlider;
