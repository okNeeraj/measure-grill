import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportState {
	report: null | unknown;
}

const initialState: ReportState = {
	report: null,
};

const reportSlice = createSlice({
	name: "lighthouse",
	initialState,
	reducers: {
		setReport: (state, action: PayloadAction<unknown>) => {
			state['report'] = action.payload
		},
	},
});

export const { setReport } = reportSlice.actions;
export default reportSlice.reducer;
