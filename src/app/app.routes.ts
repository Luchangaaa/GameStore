import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list';
import { StoreAbout } from './store-about/store-about';
import { StoreContact } from './store-contact/store-contact';

export const routes: Routes = [

{
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
},

{
    path: 'games',
    component: GameList
},

{
    path: 'about',
    component: StoreAbout
},

{
    path: 'contact',
    component: StoreContact
},

];
