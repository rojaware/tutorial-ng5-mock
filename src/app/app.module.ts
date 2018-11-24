import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmployeeComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
