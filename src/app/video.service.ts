import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  //private response : Response;

  private _getUrl = "/api/videos";   // refer to the server.js file; for router.get method, we pass in the /api/videos 
  
  constructor(private _http : HttpClient) { }

  getVideos()
  {
    return this._http.get(this._getUrl)
          .map((response : any) => response);
  }
}
