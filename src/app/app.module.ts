import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './notifications/notifications.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,WeatherModule,HttpClientModule,NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
