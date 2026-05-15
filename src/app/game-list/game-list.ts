import { Component } from '@angular/core';
import { Game } from './game';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss'],
})
export class GameList {
  
  games: Game[] = [
    {
    nombre: "Red Dead Redemption 2",
    genero: "Mundo Abierto, Acción, Aventura",
    precio: 59.99,
    stock: 100,
    img: "assets/img/RDR2.jpeg",
    clearance: false,
    cantidad: 0,
  },

  {
    nombre: "The Last OF Us",
    genero: "Acción, Aventura",
    precio: 69.99,
    stock: 150,
    img: "assets/img/TLOU.jpeg",
    clearance: true,
    cantidad: 0,
  },

  {
    nombre: "Assassin's Creed",
    genero: "Mundo Abierto, Acción, Aventura, Sigilo",
    precio: 40.00,
    stock: 700,
    img: "assets/img/AC.jpeg",
    clearance: false,
    cantidad: 0,
  },
];

upQuantity(game: Game) {
  if (game.cantidad < game.stock) {
    game.cantidad++;
  }
}

downQuantity(game: Game) {
  if (game.cantidad > 0) {
    game.cantidad--;
  }
}

ChangeQuantity(event: KeyboardEvent, game: Game) {
  const allowedKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Enter',
  ];

  const isNumber = /^[0-9]$/.test(event.key);
  const isAllowed = allowedKeys.includes(event.key);

  if (!isNumber && !isAllowed) {
    event.preventDefault();
  }

  if (event.key=='Enter') {
    if (game.cantidad > game.stock) {
      game.cantidad = game.stock;
    }
  }
}

}