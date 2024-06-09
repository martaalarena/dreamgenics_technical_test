import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { GameComponent } from './game/game.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'game', component: GameComponent},
    {path: '', component: AppComponent}
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
