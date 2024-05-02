import { Component, inject } from '@angular/core';
import  {faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons'
import { DarkThemeService } from '../../services/darktheme-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  github = faGithub;
  Behance = faSquareBehance
  themeService = inject(DarkThemeService);
}
