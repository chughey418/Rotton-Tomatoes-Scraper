import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Movie } from 'src/app/movie';
import { MovieServiceService } from 'src/app/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  genreForm: FormGroup;
  movies: Record<string, Movie> = {};

  constructor(private database: AngularFireDatabase, private movieService: MovieServiceService) {
    this.genreForm = new FormGroup({
      'genre': new FormControl(null, Validators.required)
    });
    //get items from db
    this.database.object<Record<string, Movie>>('challenge5').valueChanges().subscribe( data =>{
      if (data){
        this.movies = data;
      }
    });
   }

  ngOnInit(): void {
  }

  //call python script and crawl website based on user input
  onSubmit(genre: string) {
    console.log(genre)
    const formData: FormData = new FormData()
    formData.append('genre', genre)
    this.movieService.onSubmitService(formData).subscribe
    (res=> {
      console.log('res:', res);
    },
    err=> {
      console.log('err', err);
    }
    )
  }

  //get keys of entries in database
  getKeys(){
    return Object.keys(this.movies);
  }

}
