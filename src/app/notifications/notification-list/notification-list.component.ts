import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
