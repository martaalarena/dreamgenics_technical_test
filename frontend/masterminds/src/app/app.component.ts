import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'masterminds';
}
