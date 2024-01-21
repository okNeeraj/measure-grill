import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "@store/reportSlice";

const appStore = configureStore({
	reducer: {
		lighthouse: reportReducer
	},
	devTools: true
});

export default appStore;
