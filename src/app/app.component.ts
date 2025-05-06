import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './minegeld/menu/menu.component';
import { FooterComponent } from './minegeld/footer/footer.component';
import { HomepageComponent } from './minegeld/homepage/homepage.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MenuComponent, FooterComponent, HomepageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MineGeld';
}
