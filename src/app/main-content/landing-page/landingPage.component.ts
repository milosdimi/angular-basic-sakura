import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <section>
      <div class="nav-wrapper">
        <app-navbar></app-navbar>
      </div>

      <h1 class="fontCherryCreamSodaRegular">SAKURA RAMEN</h1>
      <h2 class="fontCherryCreamSodaRegular">Authentic Japanese RAMEN</h2>
    </section>
  `,

  styleUrls: ['./landingPage.component.scss'],
})
export class landingPageComponent {}
