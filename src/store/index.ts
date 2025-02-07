import { configureStore } from '@reduxjs/toolkit'
import { eventReducer } from './eventSlice.ts'
import { userReducer } from './userSlice.ts'

export const store = configureStore({
  reducer: {
    eventsReducerStore: eventReducer,
    userReducerStore: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch