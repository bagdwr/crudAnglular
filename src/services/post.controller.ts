import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostController {
  constructor(private http: HttpClient) {
  }

  loadAllPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/posts');
  }

  deleteById(id: number): Observable<any[]> {
    return this.http.delete<any[]>('http://127.0.0.1:8000/api/posts/' + id);
  }

  createPost(title: string, content: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/posts', {
      title: title,
      content: content
    });
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/posts/' + id);
  }

  updatePost(id: number, title: string, content: string): Observable<any> {
    return this.http.patch<any>('http://127.0.0.1:8000/api/posts/' + id, {
      title: title,
      content: content
    })
  }
}
