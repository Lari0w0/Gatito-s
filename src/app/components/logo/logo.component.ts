import { Component, inject } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  gameService = inject(GameStateService);
  
  changeGameState() {
    this.gameService.changeGameState(false);
  }
}
