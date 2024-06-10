import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { GameComponent } from './game/game.component';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';

export const routes: Routes = [
    {path: '', component: PortadaComponent},
    {path: 'game', component: GameComponent}
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
