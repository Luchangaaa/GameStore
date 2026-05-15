import { Component } from '@angular/core';
import { GameList } from '../game-list/game-list';
import { ShoppingCart } from '../shopping-cart/shopping-cart';

@Component({
  selector: 'app-store-games',
  standalone: true,
  imports: [GameList, ShoppingCart],
  templateUrl: './store-games.html',
  styleUrls: ['./store-games.scss'],
})
export class StoreGames {}
