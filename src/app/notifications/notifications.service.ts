import { Injectable } from '@angular/core';
import { type } from 'os';
import {ReplaySubject} from 'rxjs';
import {scan} from 'rxjs/operators';


interface Command{
  id:number;
  type:'success'|'error'|'clear';
  text?:string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messages:ReplaySubject<Command>;

  constructor() {
   this.messages=new ReplaySubject<Command>();
  }
  getMessage(){
    return this.messages.pipe(
      scan((acc:Command[], value:Command) => {
        if (value.type === 'clear') {
          return acc.filter(message => message.id !== value.id);
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  addSuccess(message: string) {
    this.messages.next({
      id: this.randomId(),
      text: message,
      type: 'success'
    });
  }

  addError(message: string) {
    this.messages.next({
      id: this.randomId(),
      text: message,
      type: 'error'
    });
  }

  clearMesssage(id: number) {
    this.messages.next({
      id,
      type: 'clear'
    });
  }

  private randomId() {
    return Math.round(Math.random() * 10000);
  }
}
