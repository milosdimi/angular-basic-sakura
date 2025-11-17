import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule],
    template: '<h1>Hallo world</h1>',
    styles: ['h1 {color: red;}']
})
export class landingPageComponent {

}