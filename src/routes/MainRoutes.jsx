import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/page'

const MainRoutes = () => {
	return (
		<main className='main'>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</main>
	)
}

export default MainRoutes
