import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/page'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
	)
}

export default MainRoutes
