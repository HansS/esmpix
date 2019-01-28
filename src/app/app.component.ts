import { Component } from "@angular/core";

@Component({
  selector: "hs-root",
  template: `
    <div>
      <h1>{{ title }}!</h1>
      <app-nav></app-nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "App EsmPix";
}
