import { createSlice } from '@reduxjs/toolkit'

export const betSlice = createSlice({
  name: 'bets',
  initialState: {
    bets: [],
    next_number: 0,
    current_bet: {
      betAmount: 0,
      targetMult: 0
    }
  },
  reducers: {
    makeNewBet: (state, action) => {
      state.bets = [...state.bets, action.payload];
    },
    handleBetChange: (state, action) => {
      state.current_bet = action.payload;
    },
    generateNextNumber: (state) => {
      const nextNum = Math.random() * (100 - 1 + 1) + 1;
      state.next_number = parseFloat(`${nextNum}`).toFixed(2);
    }
  },
})

export const { makeNewBet, handleBetChange, generateNextNumber } = betSlice.actions

export default betSlice.reducer