import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor() { 
    this.getCurrentLocation();
  }

  
  getForecast(){
    return this.getCurrentLocation()
      .pipe(
        map(coords=>{
          return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', '9581ec5ca8cf49c7abdde2360a727383')
        })
    )
  }
  getCurrentLocation(){
    
    return new Observable<GeolocationCoordinates>((observer)=>{
        window.navigator.geolocation.getCurrentPosition(
          position=>{
             observer.next(position.coords);
             observer.complete(); 
          },
          (err)=>observer.error(err)
        )
    });
    /*
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.position=position;
        getForecastData();
      }
    )*/
  }

}
