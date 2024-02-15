import { configureStore } from "@reduxjs/toolkit";
import { audioReducer } from "./reducers/audioReducer";


export const store = configureStore({
    reducer: {
        audio: audioReducer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch