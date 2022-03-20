import { Injectable } from '@angular/core';
import { filter, mergeMap, Observable, of, pluck, switchMap,toArray } from 'rxjs';
import { map } from 'rxjs';
import {HttpParams,HttpClient} from '@angular/common/http';

interface OpenWeathRes{
  list:{
    dt_txt:any;
    main:{
      temp:number;
    };
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url:any="https://api.openweathermap.org/data/2.5/forecast";
  constructor(private http:HttpClient) { 
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
          .set('appid','9581ec5ca8cf49c7abdde2360a727383');
        }),
        switchMap(params=>this.http.get<OpenWeathRes>(this.url,{params})),
        pluck('list'),
        mergeMap(value=>of(...value)),
        filter((value,index)=>index%8===0),
        map(value=>{
          return {
            dateString: value.dt_txt,
            temp: value.main.temp
          };
        }),toArray()
    );
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
