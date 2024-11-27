import * as React from 'react'
import s from './burger_button.module.scss'

interface IBurgerButtonProps {
	onClick(): void
	isOpen?: boolean
}

const BurgerButton: React.FC<IBurgerButtonProps> = props => {
	function getBurgerClassName(): string {
		if (props.isOpen == undefined || !props.isOpen) {
			return s.burger_button
		}
		return s.burger_button__open
	}
	return (
		<button
			onClick={() => {
				props.onClick()
			}}
			className={getBurgerClassName()}
		>
			<span></span>
		</button>
	)
}

export default BurgerButton
