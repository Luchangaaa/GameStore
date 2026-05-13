import { Component } from '@angular/core';
import { Game } from './game';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-game-list',
  imports: [CurrencyPipe],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  
  games: Game[] = [
    {
    nombre: "Red Dead Redemption 2",
    genero: "Mundo Abierto, Acción, Aventura",
    precio: 59.99,
    stock: 100,
    img: "/assets/img/RDR2.jpeg",
    clearance: false,
  },

  {
    nombre: "The Last OF Us",
    genero: "Acción, Aventura",
    precio: 69.99,
    stock: 150,
    img: "/assets/img/TLOU.jpeg",
    clearance: true,
  },

  {
    nombre: "Assassin's Creed",
    genero: "Mundo Abierto, Acción, Aventura, Sigilo",
    precio: 40.00,
    stock: 700,
    img: "/assets/img/AC.jpeg",
    clearance: false,
  },
];
}
 