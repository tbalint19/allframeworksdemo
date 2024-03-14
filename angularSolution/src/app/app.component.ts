import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular (from variable)';
  username = ""

  reset() {
    this.username = ""
  }

  log() {
    console.log(this.username)
  }


  modify() {
    this.title = "modified"
  }
}
