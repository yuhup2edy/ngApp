import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  inputs: ['videos'], // input is the videos array created in the video-center component and to match the [prop bind] in the video center html
  outputs:['SelectVideo'] // this is an output trigger event to send back selected video to video center and from there as input to video detail
})
export class VideoListComponent implements OnInit {

  public videos; // remember not adding this gave me a "property videos not found in the .html file"
  
  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid: Video)
  {
    this.SelectVideo.emit(vid);
  }

}
