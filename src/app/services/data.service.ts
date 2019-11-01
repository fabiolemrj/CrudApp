import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music, RespMusic } from '../models/music.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public url = 'http://localhost:5000/v1';
                
  constructor(private http: HttpClient) { }

  
  getMusics() {
   let _url = `${this.url}/musics`;
    return this.http.get<RespMusic>(_url);
}
}
