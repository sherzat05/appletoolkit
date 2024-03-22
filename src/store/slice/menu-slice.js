import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		isMenu: null
	},
	reducers: {
		setIsMenu(state, { payload }) {
			state.isMenu = payload
		}
	}
})

export const menuSliceActions = menuSlice.actions

export default menuSlice.reducer
