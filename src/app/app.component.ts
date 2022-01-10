import { Component, ViewEncapsulation } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { JSONBuilderService } from './jsonbuilder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './sass/main.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'myProject';

  abc(event: any) {
    console.log('event', event);

  }
  constructor(public json: JSONBuilderService) {

  }
}
