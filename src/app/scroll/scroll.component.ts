import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnChanges {
  @Input() selected:object;

  constructor() {
  }

 ngOnChanges() {
 }

}
