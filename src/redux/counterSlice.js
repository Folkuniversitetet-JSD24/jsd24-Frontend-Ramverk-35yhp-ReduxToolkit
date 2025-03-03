// Importera createSlice från Redux Toolkit.
// createSlice förenklar skapandet av Redux-slices genom att kombinera actions och reducers i ett enda objekt.
import { createSlice } from "@reduxjs/toolkit";

// Initial state: det utgångsvärde som används i denna slice.
// I vårt exempel startar vi med ett värde på 0.
const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter", // Namnet "counter" används för att identifiera denna slice.
  initialState, // Sätter utgångsvärdet vi definierade ovan.
  reducers: {
    // Reducer för att öka räknarens värde med 1.
    // När denna action dispatchas, ökas state.value med 1.
    increment: (state) => {
      state.value += 1;
    },
    // Reducer för att minska räknarens värde med 1.
    decrement: (state) => {
      state.value -= 1;
    },
    // Reducer för att öka räknarens värde med ett specificerat belopp.
    // action.payload innehåller värdet som skickas med när action dispatchas.
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Exportera action creators som skapats automatiskt baserat på reducer-funktionerna.
// Dessa funktioner skapar action-objekt som sedan kan skickas (dispatchas) till Redux-storen.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportera reducern från denna slice.
// Reducern kommer att användas av Redux-storen för att hantera uppdateringar av state baserat på actions.
export default counterSlice.reducer;
