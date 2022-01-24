import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formDataReducer from './form-data';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
