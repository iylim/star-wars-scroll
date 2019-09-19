import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {
  @Input() selected;
  @Output() remove = new EventEmitter();

}
