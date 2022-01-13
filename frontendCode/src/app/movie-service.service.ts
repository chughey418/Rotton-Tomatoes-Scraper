import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

    onSubmitService(formData: FormData): Observable<any> {
      return this.http.post<any>('https://www.clairehughey.me/past-projects/rotton-tomatoes-scraper/callScraper.php', 
      formData)
    }
}
