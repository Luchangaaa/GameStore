import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { GameList } from './game-list/game-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { StoreGames } from './store-games/store-games';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameList, ShoppingCart, StoreGames, FormsModule, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'GameStore';
}
