import { CoursesService } from './courses.service';
// import component decorater
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;

    // dependency in constructor
    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
}