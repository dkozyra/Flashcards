import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
        const newQuiz = { 
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds,
        }
        state.quizzes[action.payload.id] = newQuiz;
      }
    }
});

// Thunk action creator that returns a thunk that dispatches two actions one after the other.
export const createQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, quizId: payload.id}));
    }
};


export const selectQuizzes = state => state.quizzes.quizzes;

export const addQuiz = quizzesSlice.actions.addQuiz;
 
export default quizzesSlice.reducer;

