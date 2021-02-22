import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GetStudentsPassedDetailsError,GetStudentsPassedDetails,GetStudentsPassedDetailsSuccess, ReportActiontypes } from './reports.action';
import { ReportsService } from '../../services/reports/reports.service';

@Injectable()
export class ReportsEffects {
constructor(private action$: Actions,private reportsService:ReportsService) {}

@Effect()
GetStudentPassedDetails$ = this.action$.pipe(  
 ofType<GetStudentsPassedDetails>(ReportActiontypes.GET_STUDENTS_PASSED_DETAILS),
  switchMap(() =>    
  this.reportsService.getStudentPassedDetails().pipe(
      map(data => new GetStudentsPassedDetailsSuccess(data)),      
      catchError(error => of(new GetStudentsPassedDetailsError(error))),
    ),
  ),
);


}