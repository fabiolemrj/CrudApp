import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramepageComponent } from './shared/framepage/framepage.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainComponent } from './shared/main/main.component';
import { DataService } from './services/data.service';
import { MusicsComponent } from './pages/musics/musics.component';
import { MusicComponent } from './pages/music/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    FramepageComponent,
    NavbarComponent,
    MainComponent,
    MusicsComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
