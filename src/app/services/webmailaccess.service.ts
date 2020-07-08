import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebmailRequest } from '../model/webmail-request';
import { HttpClient } from '@angular/common/http';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class WebmailaccessService {

  private url = 'http://10.20.33.79:3000/assets/webmail/create';

  constructor(private http: HttpClient) { }

  postWebmailReq(webmailreqobj: WebmailRequest): Observable<PostResponse>  {
    console.log("in service",webmailreqobj);
    return this.http.post<PostResponse>(this.url, webmailreqobj);
  } 
}
