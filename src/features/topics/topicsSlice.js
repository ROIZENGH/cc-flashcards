import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {

    },
}

const topicsSlice = createSlice({
    name: "topics",
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {...action.payload, quizIds:[]};
            state.topics[action.payload.id] = newTopic;
        }
    },
    extraReducers: {

    }
});

export const selectTopics = (state) => state.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;