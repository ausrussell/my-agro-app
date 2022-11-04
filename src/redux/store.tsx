import { configureStore } from '@reduxjs/toolkit'
import mysteryReducer from './mysterySlice'

const store = configureStore({
  reducer: {
    mystery: mysteryReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;