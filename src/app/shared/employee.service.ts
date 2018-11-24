import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8800/api/rest/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || { };
}

  getEmployees() {
    return this.http.get(endpoint + 'employees');
  }

  
}
