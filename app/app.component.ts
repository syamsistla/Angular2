import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>{{name}}</h3> 
             <autofill></autofill>
             `,
 
})
export class AppComponent  { name = 'autofill component:'; }
