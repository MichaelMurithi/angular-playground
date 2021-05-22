import { Component} from '@angular/core'

@Component({
  selector: 'pm-root',
  template:`
  <div>
    <h2>{{pageTitle}}</h2>
    <p>My Amazing first angular component</p>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'An amazing app to learn Angular';
}