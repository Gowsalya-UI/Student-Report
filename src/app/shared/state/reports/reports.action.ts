import { Action } from '@ngrx/store';
import { StudentPassedDetails } from '../../model/reports.model';  

export enum ReportActiontypes {
GET_STUDENTS_PASSED_DETAILS = 'GET STUDENTS PASSED DETAILS',
GET_STUDENTS_PASSED_DETAILS_SUCCESS = 'GET STUDENTS PASSED DETAILS SUCCESS',
GET_STUDENTS_PASSED_DETAILS_ERROR = 'GET STUDENTS PASSED DETAILS ERROR',
}
export class GetStudentsPassedDetails implements Action {
  readonly type  = ReportActiontypes.GET_STUDENTS_PASSED_DETAILS;
}
 
export class GetStudentsPassedDetailsSuccess implements Action {
  readonly type  = ReportActiontypes.GET_STUDENTS_PASSED_DETAILS_SUCCESS;
  constructor(public payload: StudentPassedDetails){}
}

export class GetStudentsPassedDetailsError implements Action {
  readonly type  = ReportActiontypes.GET_STUDENTS_PASSED_DETAILS_ERROR;
  constructor(public payload: any){}
}


export type ReportAction = GetStudentsPassedDetails
| GetStudentsPassedDetailsSuccess
| GetStudentsPassedDetailsError;