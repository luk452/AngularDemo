import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  state: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  onStarClick () {
    this.state = !this.state;
    console.log("Start clicked", this.state);
  }

}
