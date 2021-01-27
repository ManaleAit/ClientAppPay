import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Services/service-notifications.service';

@Component({
  selector: 'app-afficher-clients',
  templateUrl: './afficher-clients.component.html',
  styleUrls: ['./afficher-clients.component.css']
})
export class AfficherClientsComponent implements OnInit {
 
  constructor(private notification:NotificationService) {

  }

 
  ngOnInit() {
   
  }
  

}
