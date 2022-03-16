import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { FooterComponent } from './home/footer/footer.component';
import { DiscoverComponent } from './home/discover/discover.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
