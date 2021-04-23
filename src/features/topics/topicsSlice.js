import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {
        'db173bce-cd3d-411b-ba11-40be4efa09b3': {
            name: 'Test Topic',
            icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/data-flow.svg',
            id: 'db173bce-cd3d-411b-ba11-40be4efa09b3',
            quizIds: []
        }
    },
}

const topicsSlice = createSlice({
    name: "topics",
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {...action.payload, quizIds:[]};
            state.topics[action.payload.id] = newTopic;
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    },
    extraReducers: {

    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;