import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'server-app';
  serverElements = [{type: 'server', name: 'Testserver', content:'Just a test'}];
  


  }


