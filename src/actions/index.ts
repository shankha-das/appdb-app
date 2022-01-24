import { createAction } from '@reduxjs/toolkit';

export interface FormData {
  fname: string;
  lname: string;
  email: string;
  phoneNo: string;
  city: string;
}

export const setTableData = createAction<FormData>('formData/setTableData');
