import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute,
              private mov: DataStorageService) {
  }

  ngOnInit() {
    
    this.movies = this.mov.fetchMovies();
    console.log(this.movieService.getMovies());
  }

 
}
