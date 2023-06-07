import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicProject';

  name:string ='Vivek';

  show: boolean =false;

  show2: boolean =true;

  isClass = 'success'

  viratObj=
  {
    Name:'Vivek',
    src1:'https://images.unsplash.com/photo-1686087344519-6e9123cd28e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    alt:'profile pic'
  }

  isStyleBinding ="color: blue;font-style:italic"

  employees = ['Virat','Rohit','Siraj'];

  employeesInfo = [
  {name:"Tom Blunder",salary:120000, designation:"Software Developer"},
  {name:"Jon Wan",salary:150000, designation:"UI/UX"},
  {name:"Naina",salary:170000, designation:"Software Engineer"},
  {name:"Sapna",salary:1220000, designation:"Sr. Software Engineer"},
  {name:"Rahul",salary:3340000, designation:"Devops"}];
}
