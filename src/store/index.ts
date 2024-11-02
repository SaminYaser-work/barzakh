// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import settingsReducer from './slices/settingsSlice'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = useReduxDispatch.withTypes<AppDispatch>()
export const useSelector = useReduxSelector.withTypes<RootState>()

export default store
