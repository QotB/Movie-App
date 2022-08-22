import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  


  constructor(private http: HttpClient, private  dataStorageService: DataStorageService, private movieService: MovieService) {}
  
  ngOnInit() {
    console.log(this.dataStorageService.fetchMovies());
    console.log("AAAAA");
    console.log(this.dataStorageService.movies);
  }

}
