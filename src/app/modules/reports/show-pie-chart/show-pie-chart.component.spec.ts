import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { ShowPieChartComponent } from './show-pie-chart.component';
import { AgGridModule } from 'ag-grid-angular';

describe('ShowPieChartComponent', () => {
  let component: ShowPieChartComponent;
  let fixture: ComponentFixture<ShowPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsModule,AgGridModule.withComponents([])],
      declarations: [ ShowPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have expected column headers', () => {
    const response = { "students": [
      {
        "studentId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "age": 7,
        "emailAddress": "krish.lee@learningcontainer.com",
        "english": 89,
        "maths": 100,
        "science": 90,
        "socialStudies": 80,
        "grade": "A"
      }      
    ]};
    component.studentReports = response;
    fixture.detectChanges();
    component.ngOnChanges();
    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const headerCells = grid.querySelectorAll('.ag-header-cell-text');
    const headerTitles = Array.from(headerCells).map((cell: any) =>
        cell.textContent.trim()
    );
    expect(headerTitles).toEqual(['Student Name', 'Age','E-mail','English','Maths','Science','Social Studies']);
});

});
