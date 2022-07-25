import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: {
    latitude: null,
    longitude: null,
  },
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions

export const selectLocation = (state) => state.location.location

export default locationSlice.reducer
