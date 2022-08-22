import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

import { MovieComponent } from '../movie.component';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;
  id!: number;
  genres: string[] = [];
  constructor(private _location: Location,
              private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.movie = this.movieService.getMovie(this.id);
          this.genres = this.movieService.getGenres(this.id);
          console.log("HERE");
          console.log(this.genres);
        }
      );
  }
  onBack(){
    this._location.back();
  }

}
