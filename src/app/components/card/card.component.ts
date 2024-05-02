import { Component, Input, inject, input } from '@angular/core';
import { DarkThemeService } from '../../services/darktheme-state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() GameScreen: 'JumpRunner' | 'Default' = 'Default';
  @Input() NameGame: string = 'Sem Jogo' ;
  constructor() { }
  themeService = inject(DarkThemeService);
}
