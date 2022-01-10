import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { JSONBuilderService } from '../jsonbuilder.service';
@Component({
  selector: '#appheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  // maintoggle = false;

  constructor(public json: JSONBuilderService) { }
  
  sidebartoggle() {
    // this.maintoggle=!this.maintoggle;
    this.json.sidetoggle = !this.json.sidetoggle;
  
    
  }

  ngOnInit(): void {
  }

}
