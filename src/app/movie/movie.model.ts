
export class Movie {
  public title: string ;
  public original_title: string;
  public overview: string;
  public poster_path: string;
  public vote_count: number;
  public genre_ids: number[];
  
  constructor(title: string, original_title: string, overview: string, poster_path: string,  vote_count: number, genre_ids: number[] ) {
    this.title = title;
    this.original_title = original_title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.vote_count = vote_count;
    this.genre_ids = genre_ids;
  }
}
