import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Componets/home/home.component';
import { NavComponent } from './Componets/nav/nav.component';
import { BusquedaComponent } from './Componets/busqueda/busqueda.component';
import { FooterComponent } from './Componets/footer/footer.component';
import{HttpClientModule} from '@angular/common/http';

//services
import { ApiSpotifyService } from './Services/api-spotify.service';
import { FormsModule } from '@angular/forms';
import { NoimagePipe } from './Pipe/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BusquedaComponent,
    FooterComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


],
  providers: [
    ApiSpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
