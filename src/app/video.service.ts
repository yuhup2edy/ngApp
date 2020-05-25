import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


import 'rxjs/add/operator/map';
import { Video } from './video';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  //private response : Response;

  private _getUrl = "/api/videos";   // refer to the server.js file; for router.get method, we pass in the /api/videos 
  private _postUrl = "/api/video";   // refer to the server.js file; for router.post(insert) method, we pass in the /api/video 
  
  constructor(private _http : HttpClient) { }

  getVideos()
  {
    return this._http.get(this._getUrl)
          .map((response : any) => response);
  }

  addVideo(video : Video){
    //let headersinfo = new HttpHeaders({'Content-Type':'application/json'});
    //let options = new HttpRequest({ headers : headersinfo }); // we make the headers available inside the request via this statement

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
   }
        return this._http.post(this._postUrl,JSON.stringify(video),options)
               .map((response : any) => response);
  }
}
