import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../shared/employee.service';

// const employees = [
//   {
//     photoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodz_dEyBDq9c-zZ2Vt9FsT_Ri41AGRyM2TDyooTrf2sBvnxwh',
//     gender: 'male',
//     dateOfBirth: '06/11/2000',
//     contactPreference: 'email',
//     phoneNumber: '444-333-0000',
//     email: 'scott@gmail.com',
//     department: 2,
//     isActive: true
//   },
//   {
//     photoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6c2HNUpEL3bsYgxdzJZzT6L898Dwk4bEWmLGwNXWHbImNXP-L',
//     gender: 'female',
//     dateOfBirth: '01/18/1990',
//     contactPreference: 'email',
//     phoneNumber: '444-666-0000',
//     email: 'rufina@gmail.com',
//     department: 1,
//     isActive: true
//   }
// ];

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

 
  employees:any = [];
  public message = "";

  constructor(private employeeService: EmployeeService) {
   
  }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    
    this.employeeService.getEmployees().subscribe( data => {
      this.employees = data}, 
      err => console.log(err), 
      () => console.log('Done loading employees')
    );
  }
 
}
