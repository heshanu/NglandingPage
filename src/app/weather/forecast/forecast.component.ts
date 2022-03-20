import { HttpClient,HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast$:Observable<{ dateString: any; temp: number; }[]>|any;
  //forcastData:any[]=[];
//get serivce from forecast service 
  constructor( private forecastService:ForecastService) {
    //this.forecast$=recastService.getForecast();
    this.forecast$=forecastService.getForecast();

  }

  ngOnInit(): void {
  }

}
