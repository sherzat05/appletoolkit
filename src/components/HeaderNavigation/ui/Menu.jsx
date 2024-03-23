import clsx from 'clsx'
import { useSelector } from 'react-redux'
import '../index.scss'
import { menuItems } from '../constant'
import { Link } from 'react-router-dom'
import useActions from '../../../hooks/useActions'
export default function Menu() {
	const { isMenu } = useSelector(s => s.menu)
	const menuItem = isMenu !== null ? menuItems[isMenu] : null
	const { setIsMenu } = useActions()
	return (
		<>
			<div
				onMouseEnter={() => {
					setTimeout(() => {
						setIsMenu(null)
					}, 200)
				}}
				className={clsx('background', {
					active: isMenu !== null
				})}
			></div>
			<div
				className={clsx('menu', {
					activeMenu: isMenu !== null
				})}
			>
				<div className='container menu--container'>
					<ul>
						{menuItem !== null &&
							menuItem.under.map((item, index) => (
								<li
									key={index}
									className={`${item.size} ${menuItem.title.toLowerCase()}`}
								>
									<h5>{item.text}</h5>
									<ol>
										{item.col.length > 0 &&
											item.col.map(({ item, link }, idx) => (
												<li key={idx}>
													<Link to={link}>{item}</Link>
												</li>
											))}
									</ol>
								</li>
							))}
					</ul>
				</div>
			</div>
		</>
	)
}
