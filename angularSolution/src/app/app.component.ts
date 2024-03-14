import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular (from variable)';
  username = ""

  isShown = false

  fruits = [
    { name: "alma", color: "piros" },
    { name: "korte", color: "barna" },
    { name: "narancs", color: "narancssarga" },
    { name: "cseresznye", color: "piros" },
  ]

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
