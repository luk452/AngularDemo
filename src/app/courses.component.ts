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
        <hr/>
        <p>Type, press ENTER and look into console...</p>
        <input (keyup.enter)="onKeyUp($event)" />
        <input [(ngModel)]="email" (keyup.enter)="OnEnterEmail()" />
        
        <hr/>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.students }} <br/>
        {{ course.price | currency:'EUR':'symbol':'3.2-2' }} <br/>
        {{ course.releaseDate | date:'yyyy-MM-dd' }} <br/>
        <hr/>
        <p> {{ longDescription | summary:10 }} </p>
    `
})

export class CoursesComponent {
    longDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus. Sagittis vitae et leo duis ut diam quam nulla porttitor. Pretium quam vulputate dignissim suspendisse in. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tellus elementum sagittis vitae et. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vitae elementum curabitur vitae nunc sed velit dignissim. Porttitor leo a diam sollicitudin tempor id eu. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.";
    course = {
        title: "The Complete Angular Course",
        rating: 4.9755,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    
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