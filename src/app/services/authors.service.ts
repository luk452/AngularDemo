import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ['Author A', 'Author B', 'Author C'];
  }

}
