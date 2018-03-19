import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from "../common/app-error";

@Injectable()
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  // private url = 'http://local.srsoft.com:5000/api/promos';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(postObj) {
    return this.http.post(this.url, JSON.stringify(postObj))
      .catch((error: Response) => {
        if (error.status === 400)
          return Observable.throw(new BadInput(error.json()));
        
          return Observable.throw(new AppError(error.json()));
      });
  }

  updatePost(postObj) {
    // this.http.patch - update only a few properties
    // this.http.put - send whole object
    return this.http.patch(this.url + "/" + postObj.id, JSON.stringify({ isRead: true }))
      .catch((error: Response) => {
        return Observable.throw(new AppError());
      
      });
    //this.http.put(this.url, JSON.stringify(input));
  }

  deletePost(id) {
    // in case of error service returns custom error object instead of error code - it translates it to language unterstandable by a component.
    // goto codewithmosh.com: "13-Throwing Application-specific Errors" for details
    return this.http.delete(this.url + "/" + id)
      .catch((error: Response) => {
        if (error.status === 404)
          return Observable.throw(new NotFoundError());
        
        return Observable.throw(new AppError(error));
      });
  }
}
