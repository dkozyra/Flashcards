import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {cards: {}},
    reducers: {
      addCard: (state, action) => {
        const newCard = { 
            id: action.payload.id,
            front: action.payload.front,
            back: action.payload.back
        }
        state.cards[action.payload.id] = newCard;
      }
    }
});

//selectCards selector
export const selectCards = state => state.cards.cards

export const addCard = cardsSlice.actions.addCard;

export default cardsSlice.reducer;