import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  RespMusic } from '../models/music.model';
import { environment } from 'src/environments/environment';
import { Music } from '../pages/music/model/music.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }


  getMusic(){
    const _url = `${environment.url}/music`;
    return this.http.get<Music[]>(_url);
  }
  getMusics() {

   const _url = `${environment.url}/musics`;
    return this.http.get<any>(_url);
}
}
