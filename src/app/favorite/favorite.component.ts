import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') state: boolean;
  @Output() change = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onStarClick () {
    this.state = !this.state;
    console.log("Start clicked", this.state);
    this.change.emit();
  }

}
