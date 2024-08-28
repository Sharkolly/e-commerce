import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./actions";

const store = configureStore({
    reducer: {
    store: storeReducer
    },
});

export default store;