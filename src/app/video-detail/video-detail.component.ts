import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  inputs: ['video']
  })
export class VideoDetailComponent implements OnInit {

  public video;
  constructor() { }

  ngOnInit(): void {
  }

}
