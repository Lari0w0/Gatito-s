import { Component, inject } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';
import { DarkThemeService } from '../../services/darktheme-state.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrl: './game-container.component.scss'
})
export class GameContainerComponent {
  gameService = inject(GameStateService);
  themeService = inject(DarkThemeService);
  
  gameSelected() {
    console.log('jogo selecionado');
    this.gameService.changeGameState(true);
  }

  changeGameState() {
    this.gameService.changeGameState(false);
  }
}