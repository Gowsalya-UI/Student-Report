import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ShowPieChartComponent } from './show-pie-chart/show-pie-chart.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reports'
    },
    {
      path: 'reports',
      component: WrapperComponent,
      children: [
        {
            path: '',
            component: StudentDetailComponent
        }
      ]
    },
   
  ];
@NgModule({
  declarations: [
    ShowPieChartComponent, 
    StudentDetailComponent,   
    WrapperComponent,
    
  ],
  imports: [
    CommonModule,
    ChartsModule, 
    FormsModule, 
    AgGridModule.withComponents([ShowPieChartComponent]), 
    RouterModule.forRoot(routes)
  ],
  providers: [],
})
export class ReportsModule { 
 }
