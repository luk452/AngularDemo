import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  isExpanded: boolean = false;
  content: string;

  @Input ('title') title: string;

  toggle() {
    this.isExpanded=!this.isExpanded;
  }

}
