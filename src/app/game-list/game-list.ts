import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  imports: [],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  
  game = {
    "nombre": "Red Dead Redemption 2",
    "genero": "Mundo Abierto, Acción, Aventura",
    "precio": 59.99,
    "stock": 100,
    "img": "/assets/img/RDR2.jpeg"
  }
}
