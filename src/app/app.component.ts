import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  viewMode = 'map';
  canSave = false;

  task = {
    id: 1,
    assignee: null
  };

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'post text',
    isLiked: true,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('fav changed', eventArgs);
  }

  title = 'Angular app';
  inputText: string;
}
