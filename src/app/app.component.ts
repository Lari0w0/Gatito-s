import { Component, inject } from '@angular/core';
import { DarkThemeService } from './services/darktheme-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  darkThemeService = inject(DarkThemeService);
}
