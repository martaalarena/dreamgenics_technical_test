import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PortadaComponent } from './app/portada/portada.component';
import { GameComponent } from './app/game/game.component';
import { provideHttpClient } from '@angular/common/http'; // Si necesitas HTTP client

const routes = [
  { path: '', component: PortadaComponent },
  { path: 'game', component: GameComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Incluye esto si usas HttpClient
  ]
}).catch(err => console.error(err));
