import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { StoreModule,Store } from '@ngrx/store';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { ShowPieChartComponent } from '../show-pie-chart/show-pie-chart.component';
import { StudentDetailComponent } from './student-detail.component';

describe('StudentDetailComponent', () => {
  let component: StudentDetailComponent;
  let fixture: ComponentFixture<StudentDetailComponent>;
  let store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule,],
      declarations: [ StudentDetailComponent,MockComponent(ShowPieChartComponent) ],
      providers:[
      {
        provide: Store,
        useValue: { 
        getStudentsDetailsResonse$ : of({}),
        pipe: () => {},
        dispatch: () => {}
       }
      }]       
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
