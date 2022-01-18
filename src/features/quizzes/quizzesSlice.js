import { createSlice } from '@reduxjs/toolkit';

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

export const selectQuizzes = state => state.quizzes.quizzes;

export const addQuiz = quizzesSlice.actions.addQuiz;
 
export default quizzesSlice.reducer;