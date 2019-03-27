import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette Party';

  showMovies: boolean = false;

  isThisIngredientVital: boolean = true;

  displayGuestList: boolean = true;

  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

}
