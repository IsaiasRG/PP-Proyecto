import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/count/countSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  
})