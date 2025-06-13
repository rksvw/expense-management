import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsultation',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsultation.component.html',
  styleUrl: './view-encapsultation.component.css',
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class ViewEncapsultationComponent {

}
