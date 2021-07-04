import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() views: string = '';
  @Input() timestamp: string = '';
  @Input() live: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('.........Video component working.............');
  }
}
