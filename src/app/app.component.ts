import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Greenbelt Community Band';

  navList = [
    { key: "/conductors", label: "Conductors" },
    { key: "/members", label: "Members" },
    { key: "/join", label: "Join the Band" },
    { key: "/performances", label: "Performances" },
    { key: "/recordings", label: "Hear & See the Band" },
    { key: "/affiliated-groups", label: "Affiliated Groups" },
    { key: "/history", label: "History" },
    // { key: "/links", label: "Links" },
    { key: "/support", label: "Support the Band" },
    { key: "/contact", label: "Contact Us" }
  ];
}
