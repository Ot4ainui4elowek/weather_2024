'use client'
import { DocumentController } from '@/app/document_controller'
import BurgerButton from '@/shared/buttons/burger_button'
import SideBar from '@/widgets/sidebar/sidebar'
import * as React from 'react'
import s from './weather.module.scss'

export interface IAppProps {}

const Home: React.FC<IAppProps> = props => {
	let [sideBarMenuIsOpen, setSideBarIsOpen] = React.useState<boolean>(false)

	const openSideBar = () => {
		if (!sideBarMenuIsOpen) {
			DocumentController.lockBodyId()
		} else {
			DocumentController.unlockBodyId()
		}
		setSideBarIsOpen(sideBarMenuIsOpen => !sideBarMenuIsOpen)
	}

	function getSideBarClassName(): string {
		if (sideBarMenuIsOpen) {
			return s.side_bar__open
		}
		return s.side_bar
	}

	return (
		<div className='container'>
			<header className={s.header}>
				<BurgerButton onClick={openSideBar} isOpen={sideBarMenuIsOpen} />

				<h3 className={s.city__name}>Тирасполь</h3>
			</header>
			<SideBar isOpen={sideBarMenuIsOpen}>231412421</SideBar>
			<div className='container pad1rem'>
				<div className={s.page_container}>
					<div className={s.weatherBackground}>
						<img src='clouds-weather.webp' alt='' />
					</div>

					<div className={s.weather}>
						<div className={s.temperature}>
							<h2>20°c</h2>
							<img
								src='/weather_icons/icons8-sun.svg'
								alt=''
								className={s.weather__icon}
							/>
						</div>

						<h4>Сегодня солнечно, без осадков</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
