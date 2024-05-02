import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private gameState: boolean = false;

  get getGameState() {
    return this.gameState;
  }

  changeGameState(state: boolean) {
    this.gameState = state;
  }
}
