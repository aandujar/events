import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Event  from '@/classes/Event'

const initialState: any = {
  eventDetail: null,
  events: [],
}

export const eventSlice = createSlice({
  name: 'event', 
  initialState,
  reducers: { 
    setEvents: (state: any, events: PayloadAction<Event[]>): void => {
      state.events = events.payload
    },
    setEventDetail: (state: any, event: PayloadAction<Event>): void => {
        state.eventDetail = event.payload
      },
  },
})

export const { setEvents, setEventDetail } = eventSlice.actions
export const eventReducer = eventSlice.reducer