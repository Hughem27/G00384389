import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './Services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  employees:any = [];
  constructor(private service: EmployeesService) { }


  ngOnInit() {
    this.service.GetEmployeeData().subscribe(
      (data) => { 
        this.employees = data.employees;
        console.log(this.employees);
      }
    );

  }

}
