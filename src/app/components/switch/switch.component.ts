import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DarkThemeService } from '../../services/darktheme-state.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  darkThemeService = inject(DarkThemeService);
  onSwitchChange(value: boolean) {
    this.darkThemeService.changeDarkState(value);
  }
}
