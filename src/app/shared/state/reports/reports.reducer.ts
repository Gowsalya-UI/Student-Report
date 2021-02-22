import { ReportActiontypes, ReportAction } from './reports.action';
import { StudentPassedDetails } from '../../model/reports.model';

export interface ReportState {
    studentPassedDetailsResponse: StudentPassedDetails[];
    error: string;
}

export const intialState: ReportState = {
    studentPassedDetailsResponse: [],
    error: '' ,
}  

export function reportReducer(state: ReportState=intialState, action: ReportAction) {
    switch (action.type) {        
      case ReportActiontypes.GET_STUDENTS_PASSED_DETAILS_SUCCESS:
          return {
              ...state, 
              studentPassedDetailsResponse: action.payload
          };
      default:
          return state;
      }
}
