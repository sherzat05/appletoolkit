import { combineReducers, configureStore } from '@reduxjs/toolkit'
import menuSlice from './slice/menu-slice'

const rootSlice = combineReducers({
	menu: menuSlice
})

export const store = configureStore({
	reducer: rootSlice,
	devTools: true
})
