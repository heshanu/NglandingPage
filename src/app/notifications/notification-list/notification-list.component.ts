import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService,Command } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  messages: Observable<Command[]>;
  constructor(private notificationService:NotificationsService) {
    this.messages=this.notificationService.messagesOut;
    //add event to x
  }

  ngOnInit(){}

  clearMessage(id:number){
    this.notificationService.clearMessage(id);
  }
  
}
