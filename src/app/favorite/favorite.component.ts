import { Component, OnInit, Input, Output , EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulates the behaviour of Shadow DOM = default
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') state: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStarClick () {
    this.state = !this.state;
    console.log('Start clicked', this.state);
    this.change.emit({ newValue: this.state });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
