// Componente generado con el comando ng g c games -s -t --skip-tests

import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Sebastian';
  isLoggedIn = false;

  greet(){
    alert('Hola!');
  }
}
