import { Component, OnInit, OnChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  inputs: ['video'],
  outputs :['updateVideoEvent','deleteVideoEvent'] // the video detail is only for display. to update the video, we will emit trigger to video center
                                // which in turn calls the service to update the video. 
  })
export class VideoDetailComponent implements OnInit {

  public video;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  public editTitle : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.editTitle = false;
  }


  onTitleClick()
  {
    this.editTitle = true;
  }

  updateVideo()
  {
    this.updateVideoEvent.emit(this.video);
  }
  
  deleteVideo()
  {
    this.deleteVideoEvent.emit(this.video);
  }
}
