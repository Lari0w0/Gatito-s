import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SwitchComponent } from './switch/switch.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from "@angular/forms";
import { GameContainerComponent } from './game-container/game-container.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from "../icons/icons.module";
import { BrowserModule } from "@angular/platform-browser";
import { JumpRunerComponent } from './jump-runer/jump-runer.component';

@NgModule({
    declarations: [
    HeaderComponent,
    LogoComponent,
    SwitchComponent,
    CardComponent,
    GameContainerComponent,
    FooterComponent,
    JumpRunerComponent
  ],
    imports: [
      FormsModule, IconsModule, BrowserModule
    ],
    exports: [HeaderComponent, GameContainerComponent, FooterComponent]
})

export class ComponentsModule {} 