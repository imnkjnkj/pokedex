import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { ApiService } from './services/api.service';
import { PokemonCardComponent } from './home/components/pokemon-card/pokemon-card.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DetailModalComponent } from './home/components/detail-modal/detail-modal.component';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ScrollingModule
  ],
  declarations: [AppComponent, HomeComponent, PokemonCardComponent, DetailModalComponent],
  providers: [ApiService],
  exports: [HomeComponent, PokemonCardComponent, DetailModalComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
