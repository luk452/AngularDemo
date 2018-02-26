import { CoursesService } from './courses.service';
// import component decorater
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ title }}</h2>
        <img [src]="imageUrl" />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <div (click)="onDivClick()">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
            <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Load</button>
        </div>
        <hr />
        <p>Type, press ENTER and look into console...</p>
        <input (keyup.enter)="onKeyUp($event)" />
        <input [(ngModel)]="email" (keyup.enter)="OnEnterEmail()" />
    `
})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/g/400/100";
    isActive = false;
    courses;
    email = "me@example.com"

    // dependency in constructor
    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    onSave($event) {
        $event.stopPropagation(); // stops bubbling, so it disables event handling for higher objects in DOM
        console.log("Button was clicked!", $event);
    }

    onDivClick() {
        console.log("DIV clicked!");
    }

    onKeyUp($event) {
        console.log("You entered: ", $event.target.value);
    }

    OnEnterEmail() {
        console.log("You entered: ", this.email);
    }
}