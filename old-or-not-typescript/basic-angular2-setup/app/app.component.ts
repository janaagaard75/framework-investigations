import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  styleUrls: [
    './main.scss',
    './app.component.scss'
  ],
  template:`
    <div class="container">
      <h1>{{title}}</h1>
      <p>App ready</p>
    </div>
  `
})
export class AppComponent {
  title = 'Film Filter'
}