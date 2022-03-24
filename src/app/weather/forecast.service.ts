import { Injectable } from '@angular/core';
import { filter, mergeMap, Observable, of, pluck, share, switchMap,toArray,tap,throwError,catchError,retry } from 'rxjs';
import { map } from 'rxjs';
import {HttpParams,HttpClient} from '@angular/common/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import {NotificationsService} from '../notifications/notifications.service';
/*
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
  constructor(private http:HttpClient,private notificationService:NotificationsService) { 
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
        }),toArray(),
        share()
    );
  }
  getCurrentLocation(){  
    return new Observable<GeolocationCoordinates>((observer)=>{
        window.navigator.geolocation.getCurrentPosition(
          position=>{
            //this.notificationService.addSuccess('Got your location');
             observer.next(position.coords);
             observer.complete(); 
          },
          err=>observer.error(err)
        );
    }).pipe(
      retry(2),//execute oberseravable using n time retry()
      tap(()=>{
          this.notificationService.addSuccess('Got your locations!');
      }),catchError((err)=>{
        //handle the error
        this.notificationService.addError('faild to get your location!');
        return throwError(err);
      })
    }
  }
}
*/

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', 'f557b20727184231a597c710c8be3106');
      }),
      switchMap(params =>
        this.http.get<OpenWeatherResponse>(this.url, { params })
      ),
      pluck('list'),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        };
      }),
      toArray<{ dateString: string; temp: number }>(),
      share()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position.coords);
          observer.complete();
        },
        err => observer.error(err)
      );
    }).pipe(
      tap(() => {
        this.notificationsService.addSuccess('Got your location');
      }),
      catchError(err => {
        // #1 - Handle the error
        this.notificationsService.addError('Failed to get your location');

        // #2 - Return a new observable
        return throwError(err);
      })
    );
  }
}
