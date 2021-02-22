import { Component, OnChanges, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color,monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { StudentPassedDetails,Students } from '../../../shared/model/reports.model';

@Component({
  selector: 'app-show-pie-chart',
  templateUrl: './show-pie-chart.component.html',
  styleUrls: ['./show-pie-chart.component.scss']
})
export class ShowPieChartComponent implements OnChanges {

   public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[]= [];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = []; 
  public enabled: boolean = false;
  studentInfo: Array<string> = [];

  @Input() studentReports: StudentPassedDetails; 


  columnDefs = [
    {headerName: 'Student Name', field: 'firstName',width:200},
    {headerName: 'Age', field: 'age',editable:  true,width:100, 'type': 'numericColumn', 
      valueSetter: (params:any)=>{
      params.data.age = Number (params.newValue);
      return true;
      }},
    {headerName: 'E-mail', field: 'emailAddress',editable: true,  
        valueSetter: (params:any)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        params.data.emailAddress = re.test((params.newValue).toLowerCase()) ? params.newValue : params.data.emailAddress;
        return params.data.emailAddress;
    }},
    {headerName: 'English', field: 'english',width:100},
    {headerName: 'Maths', field: 'maths',width:100},
    {headerName: 'Science', field: 'science',width:100},
    {headerName: 'Social Studies', field: 'socialStudies',width:100}
  ];
  rowData: any = [];
  
  constructor() {    
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();   
    this.pieChartData=[];
  } 
  
  ngOnChanges(): void { 
    if(this.studentReports.students.length > 0) {         
      const filterGrade = this.studentReports.students.map((t: Students)=> t.grade);
      this.studentInfo = Array.from(new Set(filterGrade));
      this.pieChartLabels = this.studentInfo;
      const countOccurrences = (arr:any) => arr.reduce((prev:any, curr:any) => (prev[curr] = ++prev[curr] || 1, prev),{});   
      this.pieChartData = Object.values(countOccurrences(filterGrade)).map((x: any)=> x / filterGrade.length * 100);
    }
  }
 
  public chartClicked(e:any){
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
        if ( activePoints.length > 0) {          
          const clickedElementIndex = activePoints[0]._index;
          const label: string = chart.data.labels[clickedElementIndex];
          const data = this.studentReports.students.filter((t: Students)=> t.grade === label);
          this.rowData = data;
        }
      }  
  }  
  
  onCellValueChanged(e:any) {
    this.enabled = true;
  }
}
