import * as React from 'react'
import s from './sidebar.module.scss'

interface ISideBarProps {
	isOpen: boolean

	children?: React.ReactNode
}

const SideBar: React.FunctionComponent<ISideBarProps> = props => {
	function getSideBarClassName(): string {
		if (props.isOpen) {
			return s.side_bar__open
		}
		return s.side_bar
	}

	return (
		<div className={getSideBarClassName()}>
			<div className='container pad1rem'>{props.children}</div>
		</div>
	)
}

export default SideBar
