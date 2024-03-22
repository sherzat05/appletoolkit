import React, { useEffect, useState } from 'react'
import './index.scss'
import { menuItems } from './constant'
import Menu from './ui/Menu'
import useActions from './../../hooks/useActions'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HeaderNavigation() {
	const { isMenu } = useSelector(s => s.menu)
	const { setIsMenu } = useActions()

	const [isHoveringNav, setIsHoveringNav] = useState(false)

	useEffect(() => {
		let timer: number
		if (!isHoveringNav) {
			timer = setTimeout(() => {
				setIsMenu(null)
			}, 200)
		}

		return () => {
			clearTimeout(timer)
		}
	}, [isHoveringNav, setIsMenu])
	return (
		<nav
			className='navigate'
			onMouseEnter={() => setIsHoveringNav(true)}
			onMouseLeave={() => setIsHoveringNav(false)}
		>
			{menuItems.map((item, idx) => (
				<li className='nav__link' onMouseOver={() => setIsMenu(idx)} key={idx}>
					<Link to={item.link}>{item.title}</Link>
				</li>
			))}
			<Menu />
		</nav>
	)
}
