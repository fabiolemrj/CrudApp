import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music, RespMusic } from 'src/app/models/music.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  public musics$: Observable<RespMusic> = null;
  public musics: Music[] = null;
  public msg : string;
  public sucess: boolean;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.musics$ = this.dataservice.getMusics();
   

    this.musics$.subscribe(
      res =>  this.sucess = res.success
    );
    this.musics$.subscribe(
      res =>  this.musics = res.data
    );
    if(this.msg == ""){
      this.msg = "vazio";
    }
    if(sucess)
    {
     
     // this.musics = [];

      this.musics.push(new  Music("0001","001","Musica1","pop"));
      this.musics.push(new  Music("0002","002","Musica2","samba"));
    }
     else
     {
      
    }
  
  }


}
