import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form-2',
  templateUrl: './new-course-form-2.component.html',
  styleUrls: ['./new-course-form-2.component.css']
})
export class NewCourseForm2Component {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.controls.splice(index, 1);
    // this.topics.removeAt(index);

  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
