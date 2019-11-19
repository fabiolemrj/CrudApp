import { Component, OnInit } from '@angular/core';
import { Music } from '../model/music.model';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public musics: Observable<Music[]> = null;
  public _musics: Music[]=[];


  constructor(private service: DataService) { }

  ngOnInit() {
    this.loadMusic();
  }

  loadMusic(){
    this.musics = this.service.getMusic();
    this.musics.subscribe(
      resp => this._musics = resp,
      erro => console.log(erro)
    );
  

  }

}
