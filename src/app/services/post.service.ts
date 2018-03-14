import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  // private url = 'http://local.srsoft.com:5000/api/promos';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(postObj) {
    return this.http.post(this.url, JSON.stringify(postObj));
  }

  updatePost(postObj) {
    // this.http.patch - update only a few properties
    // this.http.put - send whole object
    return this.http.patch(this.url + "/" + postObj.id, JSON.stringify({ isRead: true }))
    //this.http.put(this.url, JSON.stringify(input));
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id);
  }
}
