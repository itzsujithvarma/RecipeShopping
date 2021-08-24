import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featured='recipe';
  title = 'recipeshopping';
  loadApp(feature:string){
    this.featured=feature;
  }
}
