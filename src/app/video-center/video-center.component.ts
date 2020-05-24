import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import 'rxjs/add/operator/toPromise';
//import { Type } from 
import { VideoService } from '../video.service';
//import { resolve } from 'dns';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss'],
  providers : [VideoService] // this is for the subscription part
})
export class VideoCenterComponent implements OnInit {

  //videos : Array<Video>;

  videos : Video[];

  selectedVideo : Video;

  errorMsg : String;

  constructor(private _videoService : VideoService) { }

  
  //videos : Video<any>;

  //[
  // {"_id":"1","title":"First   Video","url":"www.ndtv.com","description":"Indian News1","views":98,"popularity":"normal"},
  // {"_id":"2","title":"Second  Video","url":"www.cnn.com","description":"Indian News2","views":10,"popularity":"sub-normal"},
  // {"_id":"3","title":"Third   Video","url":"www.abcnews.com","description":"Indian News3","views":100551,"popularity":"high"},
  // {"_id":"4","title":"Fourth  Video","url":"www.timesofindia.com","description":"Indian News4","views":1500,"popularity":"unknown"},
  // {"_id":"5","title":"Fifth   Video","url":"www.republictv.com","description":"Indian News5","views":1100,"popularity":"faltu"}
  //];

  // below code will call the getVideos() method defined in the video servcice (which internally calls the /api/videos in the request.get 
  // method on server.js to return a response Video list which is now assigned to the videos array (hard coded array removed) )

  ngOnInit(): void {
    this._videoService.getVideos()
          .subscribe((data : any) => this.videos = data);
      }

       
  onSelectedVideo(video : any)
  {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
