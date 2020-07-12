import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RemoteAccess } from '../model/remoteaccess.model';
import { HttpClient } from '@angular/common/http';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class RemoteaccessService {

  private url = 'http://59.145.135.45:3000/assets/remoteaccess/create';

  constructor(private http: HttpClient) { }

  postRemoteAccessReq( remoteAccessObj: RemoteAccess): Observable<PostResponse>  {
    console.log("in service", remoteAccessObj);
    return this.http.post<PostResponse>(this.url, remoteAccessObj);
  } 
}


