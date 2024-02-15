import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    audio: string | null;
    pause: boolean;

}

const initialState: InitialState = {
    audio: null,
    pause: true
}

export const audioReducer = createSlice({
    name: 'audio',
    initialState,
    reducers : {
        setAudio: (state, action) => {
            state.audio = action.payload
        },
        setPause: (state, action) => {
            state.pause = action.payload
        }
    }
})

export const {setAudio, setPause} = audioReducer.actions