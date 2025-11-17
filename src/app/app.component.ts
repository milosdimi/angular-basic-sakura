import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { landingPageComponent } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, landingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
