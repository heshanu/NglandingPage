import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './notifications/notifications.module'; 
//import { NewApiModule } from './new-api/new-api.module';
import { NewsApiModule } from './news-api/news-api.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,WeatherModule,HttpClientModule,NotificationsModule,NewsApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
