import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setTableData, FormData } from 'actions';

export interface AppState {
  formData: FormData[];
}

const initialState: AppState = {
  formData: [],
};

const formDataReducer = createReducer(initialState, (fData) => {
  fData.addCase(
    setTableData,
    (state: AppState, { payload }: PayloadAction<FormData>) => {
      state.formData.push(payload);
    },
  );
});

export default formDataReducer;
