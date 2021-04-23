import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {

    },
}

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    },
    extraReducers: {

    }
})

export const thunkCreateQuiz = (payload) => {
    return (dispatch, getState) => {
        dispatch(addQuiz({id: payload.id, name: payload.name, topicId: payload.topicId, cardIds: payload.cardIds}));
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}));
    }
}

export const setQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;