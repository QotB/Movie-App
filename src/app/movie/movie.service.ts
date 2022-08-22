import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Movie } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {

  private movies: Movie[] = []
  private genres: any[] = [];
  
  
  setMovies(movies: Movie[]) {
    this.movies = movies;
  }

  setgenres(genres: any[]) {
    this.genres = genres;
  }


  getMovies(){
    return this.movies;
  }

  getMovie(index: number) {
    return this.movies[index];
  }

  getGenres(index: number)
  {
    let newGen: string[] = [];
    for(let genId of this.movies[index].genre_ids)
    {
        for(let gen of this.genres)
        {
            if(gen["id"] === genId)
            {
              newGen.push(gen["name"]);
              break;
            }
        }
    }
    return newGen;
  }
  
}
