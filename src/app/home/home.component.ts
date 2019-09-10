import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films$: any;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    return this.dataService.getFilm().subscribe(res => {
      let films = res.results;
      this.films$ = films;
    }); 
  }
}