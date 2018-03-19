import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from "../common/app-error";

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable"; // it must be "rxjs/Observable" with capital "O"!!!
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  // private url = 'http://local.srsoft.com:5000/api/promos';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(postObj) {
    return this.http.post(this.url, JSON.stringify(postObj))
      .catch(this.handleError);
  }

  updatePost(postObj) {
    // this.http.patch - update only a few properties
    // this.http.put - send whole object
    return this.http.patch(this.url + "/" + postObj.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
    //this.http.put(this.url, JSON.stringify(input));
  }

  deletePost(id) {
    // in case of error service returns custom error object instead of error code - it translates it to language unterstandable by a component.
    // goto codewithmosh.com: "13-Throwing Application-specific Errors" for details
    return this.http.delete(this.url + "/" + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    
    return Observable.throw(new AppError(error));
  }
}
