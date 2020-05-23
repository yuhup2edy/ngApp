import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss']
})
export class VideoCenterComponent implements OnInit {

  constructor() { }

  videos : Video[] = [
  {"_id":"1","title":"First   Video","url":"www.ndtv.com","description":"Indian News1","views":98,"popularity":"normal"},
  {"_id":"2","title":"Second  Video","url":"www.cnn.com","description":"Indian News2","views":10,"popularity":"sub-normal"},
  {"_id":"3","title":"Third   Video","url":"www.abcnews.com","description":"Indian News3","views":100551,"popularity":"high"},
  {"_id":"4","title":"Fourth  Video","url":"www.timesofindia.com","description":"Indian News4","views":1500,"popularity":"unknown"},
  {"_id":"5","title":"Fifth   Video","url":"www.republictv.com","description":"Indian News5","views":1100,"popularity":"faltu"}

];

  selectedVideo : Video;

  ngOnInit(): void {
  }

  onSelectedVideo(video : any)
  {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
