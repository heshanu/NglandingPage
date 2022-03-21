import { Injectable } from '@angular/core';
import { type } from 'os';
import {Observable,Subject} from 'rxjs';
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
  messagesInput:Subject<Command>;
  messagesOut:Observable<Command[]>;

  constructor() {
   this.messagesInput=new Subject<Command>();
   this.messagesOut=this.messagesInput.pipe(
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
    this.messagesInput.next({
      id: this.randomId(),
      text: message,
      type: 'success'
    });
  }

  addError(message: string) {
    this.messagesInput.next({
      id: this.randomId(),
      text: message,
      type: 'error'
    });
  }

  clearMesssage(id: number) {
    this.messagesInput.next({
      id,
      type: 'clear'
    });
  }

  private randomId() {
    return Math.round(Math.random() * 10000);
  }
}
