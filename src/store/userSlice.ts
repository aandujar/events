import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import User from '@/classes/User'

export const userSlice = createSlice({
  name: 'user', 
  initialState: { user: null },
  reducers: { 
    setUser: (state: any, events: PayloadAction<User>): void => {
      state.events = events.payload
    },
  },
})

export const { setUser } = userSlice.actions
export const userReducer = userSlice.reducer