import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { YoutubevideosComponent } from './youtubevideos/youtubevideos.component';
import {RouterModule} from '@angular/router';
import {route} from './app.routes';
import {HomeService} from './home/home.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, YoutubevideosComponent
  ],
  imports: [FormsModule,
    BrowserModule, RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
