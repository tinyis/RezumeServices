import { ExperienceService } from './experience.service';
import { Component, OnInit } from '@angular/core';
import { LeraRezume } from '../mock-rezume';

@Component({
  selector: 'app-experience',
  template: `
            <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
            <div><input [(ngModel)]="name" placeholder = "Experience" />
            <button (click)="addItem(name)">Add</button>
        </div>
        <table>
        <ng-container *ngIf="items.length > 0">
            <tr *ngFor="let item of items">
                <td>{{item}}</td>
            </tr>
        </ng-container>
        </table>
            </div>`,
  styles: [``],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {

  items: string[] = [];
  name: string="";
  constructor(private experienceService: ExperienceService){}

  addItem(name: string){

      this.experienceService.addData(name);
  }


  ngOnInit(): void {
    this.items = this.experienceService.getData();
  }

}
