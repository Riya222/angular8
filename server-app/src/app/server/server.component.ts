import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.scss']
  styles:[`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent implements OnInit {
serverId: number = 10;
serverStatus: string = 'offline';


 


getServerStatus() {
  return this.serverStatus;
}

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' :'offline';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
   }

  
  

