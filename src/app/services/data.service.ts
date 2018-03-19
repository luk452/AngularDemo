import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable"; // it must be "rxjs/Observable" with capital "O"!!!
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    // this.http.patch - update only a few properties
    // this.http.put - send whole object
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())
      .catch(this.handleError);
    //this.http.put(this.url, JSON.stringify(input));
  }

  delete(id) {
    // in case of error service returns custom error object instead of error code - it translates it to language unterstandable by a component.
    // goto codewithmosh.com: "13-Throwing Application-specific Errors" for details
    return this.http.delete(this.url + "/" + id)
      .map(response => response.json())  
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
