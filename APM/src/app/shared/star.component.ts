import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  styleUrls: ['./star.component.css'],
  templateUrl: './star.component.html',
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
