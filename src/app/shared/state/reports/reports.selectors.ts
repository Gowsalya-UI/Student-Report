import { createSelector } from '@ngrx/store';
import { ReportState } from './reports.reducer';

const getError = (state: ReportState): string => state.error;
const getStudentsDetails = (state: ReportState): any => state.studentPassedDetailsResponse;

const getStateError = createSelector(
  (state: any) => state.reportState,
  getError
);

const getStudentsDetailsResonse = createSelector(
  (state: {reportState: ReportState}) => state.reportState,
  getStudentsDetails
);


export { getStateError, getStudentsDetailsResonse }