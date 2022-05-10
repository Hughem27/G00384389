import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private Http:HttpClient) { }

  GetEmployeeData():Observable<any>{
    return this.Http.get('https://jsonblob.com/api/jsonBlob/973544812515180544');
  }
}
