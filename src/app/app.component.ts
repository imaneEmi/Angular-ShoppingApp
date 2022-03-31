import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My online shop';
  date = new Date()
  visibility = true

  showTime() {
    this.visibility = false
  }

  hideTime() {
    this.visibility = true
  }
}
