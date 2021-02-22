import { Component, OnInit, } from '@angular/core';
import { Store, } from '@ngrx/store';
import { ReportState } from '../../../shared/state/reports/reports.reducer'; 
import { GetStudentsPassedDetails } from '../../../shared/state/reports/reports.action';
import { getStudentsDetailsResonse } from '../../../shared/state/reports/reports.selectors';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  studentReport$: Observable<any>;
 
  constructor(private store: Store<{ reportState: ReportState }>) { 
    
  } 
  
  ngOnInit(): void {       
    this.dispatch();
    this.studentReport$ = this.store.select(getStudentsDetailsResonse);
  }
  
  dispatch(){
    this.store.dispatch(new GetStudentsPassedDetails());
  }
}
