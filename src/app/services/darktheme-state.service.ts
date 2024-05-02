import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  private darkTheme: boolean = true;

  get getDarkTheme() {
    return this.darkTheme;
  }

  changeDarkState(state: boolean) {
    this.darkTheme = state;
  }
}
