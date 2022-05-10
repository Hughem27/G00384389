import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }
    
    GetEmployeeData():Observable<any>{
        return this.httpclient.get("https://jsonblob.com/api/jsonBlob/973544812515180544");

    }

  
}
