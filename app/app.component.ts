import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <a [routerLink]="['/']">Home</a>
	  <a [routerLink]="['/about']">About</a>  
    <div>
       <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent { }
