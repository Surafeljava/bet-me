import { configureStore } from '@reduxjs/toolkit'
import betReducer from '../slices/betSlices'

export default configureStore({
  reducer: {
    bets: betReducer,
  },
})