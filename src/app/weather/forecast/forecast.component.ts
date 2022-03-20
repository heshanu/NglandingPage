import { HttpClient,HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forcastData:any[]=[];
//get serivce from forecast service 
  constructor( private forecastService:ForecastService) {
    forecastService.getForecast()
      .subscribe((forecastData)=>{
         this.forcastData=forecastData;
         console.log(forecastData);
      })   }

  ngOnInit(): void {
  }

}
