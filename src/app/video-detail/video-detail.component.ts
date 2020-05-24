import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  inputs: ['video']
  })
export class VideoDetailComponent implements OnInit {

  public video;
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
}
