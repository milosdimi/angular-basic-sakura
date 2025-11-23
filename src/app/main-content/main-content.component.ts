import { Component } from '@angular/core';
import { landingPageComponent } from './landing-page/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsComponent } from './find-us/find-us.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [landingPageComponent, HowToOrderComponent, OurMenuComponent, FindUsComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {}
