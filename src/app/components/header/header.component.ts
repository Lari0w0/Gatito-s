import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DarkThemeService } from '../../services/darktheme-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(DarkThemeService);
}
