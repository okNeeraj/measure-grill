import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MetaState {
	report: null | unknown;
}

const initialState: MetaState = {
	title: null,
};

const metaSlice = createSlice({
	name: "meta",
	initialState,
	reducers: {
		setMeta: (state, action: PayloadAction<unknown>) => {
			state['report'] = action.payload
		},
	},
});

export const { setMeta } = metaSlice.actions;
export default metaSlice.reducer;
