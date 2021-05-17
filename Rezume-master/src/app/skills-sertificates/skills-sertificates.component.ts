import { Component, OnInit } from '@angular/core';
import { LeraRezume } from '../mock-rezume';
import {SkillsService} from './skills.service';


@Component({
  selector: 'app-skills-sertificates',
  template: `
            <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
            <div><input [(ngModel)]="name" placeholder = "Skill" />
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
  styles: [''],
  providers: [SkillsService]

})
export class SkillsSertificatesComponent implements OnInit {

    items: string[] = [];
    name: string="";
    constructor(private skillsService: SkillsService){}

    addItem(name: string){

        this.skillsService.addData(name);
    }

  ngOnInit(): void {
    this.items = this.skillsService.getData();

  }

}
