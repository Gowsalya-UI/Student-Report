import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,} from 'rxjs/operators';
import { throwError, } from 'rxjs';
import { StudentPassedDetails } from '../../model';
 
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
 
  baseUrl: string;
  headers: {};
 
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3004';
    this.headers =  { 'Content-Type': 'application/json' };
  }
 
  getStudentPassedDetails() {
    return this.http.get<StudentPassedDetails>(`${this.baseUrl}/getStudentPassedDetails`, { headers: this.headers })
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}