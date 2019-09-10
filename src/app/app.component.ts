import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Star Wars Scroll';
  getUrl() {
  return "url('https://wallpapercave.com/wp/wp3376969.jpg')";
}

}
