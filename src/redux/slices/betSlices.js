import { createSlice } from '@reduxjs/toolkit'

export const betSlice = createSlice({
  name: 'counter',
  initialState: {
    bets: [],
  },
  reducers: {
    makeNewBet: (state, action) => {
      state.bets.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { makeNewBet } = betSlice.actions

export default betSlice.reducer