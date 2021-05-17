import { Component, OnInit } from '@angular/core';
import { LeraRezume } from '../mock-rezume';

@Component({
  selector: 'app-other-information',
  template: `
              <div [ngClass]="currentClasses">
              <p>FULL NAME: {{rezume.fio}}</p>
              <p>TELEPHONE: {{rezume.tel}}</p>
              <p>BIRTHDAY: {{rezume.birthday|date:"longDate"}}</p>
              <p>EMAIL: {{rezume.email|lowercase}}</p>
              <p>CITY: {{rezume.city}}</p>
              <p>PHOTO: </p><img [ngStyle]="{'width':'500px', 'height':'auto'}" [attr.src]='rezume.photo'/>
              <p>REFERENCES: </p>
              <ul class="refs" *ngIf="rezume.refs.length > 0">
              <li *ngFor="let ref of rezume.refs">
              {{ref}}
              </li>
              </ul>
              <p>DESIRED SALARY: {{rezume.desiredSalary|currency}}</p>
              <p>PROFILE FULLNESS: {{rezume.profileFullness|percent}}</p>
              </div>
 `,
  styles: [`.verdanaFont{font-size:13px; font-family:Verdana;}
            .navyColor{color:navy;}`]

})
export class OtherInformationComponent implements OnInit {

  rezume=LeraRezume;

isVerdana = true;
isNavy = true;


currentClasses={
verdanaFont: this.isVerdana,
navyColor: this.isNavy,

}

  constructor() { }

  ngOnInit(): void {
  }

}

