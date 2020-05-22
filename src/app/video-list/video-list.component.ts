import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  inputs: ['videos'] // input is the videos array created in the video-center component
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
