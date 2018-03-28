import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.css']
})
export class Courses2Component {

  courses;

  onAdd() {
    this.courses.push({ id: 4, name: 'new c4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name += ' UPDATED!';
  }

  loadCourses () {
    this.courses = [
      { id: 1, name: 'c1'},
      { id: 2, name: 'c2'},
      { id: 3, name: 'c3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
