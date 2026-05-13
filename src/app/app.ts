import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameList } from './game-list/game-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameList, ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'GameStore';
}
