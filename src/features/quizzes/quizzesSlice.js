import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {

    }
}

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
    reducers: {
        addQuizz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    },
    extraReducers: {

    }
})

export const setQuizzes = (state) => state.quizzes.quizzes;

export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;