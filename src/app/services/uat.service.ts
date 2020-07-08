import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PostResponse } from '../model/post-response';
import { uat } from '../model/uat.model'


@Injectable({
  providedIn: 'root'
})


export class UatService {
 // private url = 'http://localhost:3000/assets/uat/create';
  private url = 'http://10.20.33.79:3000/assets/uat/create';
  constructor(private http : HttpClient) { }

  postUat(uatObject : uat): Observable<PostResponse>{
    console.log('in service', uatObject)
    return this.http.post<PostResponse>(this.url, uatObject);
  }
}
