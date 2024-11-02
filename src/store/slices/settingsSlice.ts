import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  blockAll: boolean
  strictness: number
}

const initialState: SettingsState = {
  blockAll: true,
  strictness: 85,
}

const settingsSlice = createSlice({
  name: 'todos',

  initialState,

  reducers: {
    setBlockAll: (state, action: PayloadAction<boolean>) => {
      state.blockAll = action.payload
    },

    setStrictness: (state, action: PayloadAction<number>) => {
      state.strictness = action.payload
    },

  },
})

export const {setBlockAll, setStrictness} = settingsSlice.actions
export default settingsSlice.reducer
