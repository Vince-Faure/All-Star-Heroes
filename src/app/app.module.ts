import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { VilainsListComponent } from './vilains-list/vilains-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { VilainDetailsComponent } from './vilain-details/vilain-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    VilainsListComponent,
    HeroDetailsComponent,
    VilainDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
