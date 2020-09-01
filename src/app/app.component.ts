import { Component } from '@angular/core';
import {HttpServiceService} from './http-service.service'
import { EmployeeData } from 'src/assets/model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  empData : EmployeeData;
  show: boolean = false;

  constructor(private http: HttpServiceService<EmployeeData>)
  {

  }
  getData(){
    //this.http.getData().subscribe(data => {this.empData = data;})
    this.show = true;
    console.log("Demo Application");
  }
}
