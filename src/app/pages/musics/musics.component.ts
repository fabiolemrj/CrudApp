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
    let success: string;

    this.musics$.subscribe(
      res =>  success = String(res.success) 
    );
   
    
    if(success = "true")
    {
      this.musics$.subscribe(
        res =>  this.musics = res.data
      );
    } 
     else
     {
      
      this.musics$.subscribe(
        res =>  this.msg = res.message
      );
     
    }
  
  }


}
