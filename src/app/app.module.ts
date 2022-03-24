import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './notifications/notifications.module'; 
//import { NewApiModule } from './new-api/new-api.module';
import { NewsApiModule } from './news-api/news-api.module';
import { NewsApiService } from './news-api/news-api.service';
import { ForecastService } from './weather/forecast.service';
import { TrimOutletNamePipe } from './news-api/trim-outlet-name.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,WeatherModule,HttpClientModule,NotificationsModule,NewsApiModule,SharedModule
  ],
  providers: [NewsApiService,ForecastService,TrimOutletNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
