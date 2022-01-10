import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JSONBuilderService } from '../jsonbuilder.service';
declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  dropdownopen: any;

  constructor(public json: JSONBuilderService) {

  }
  sidemenu = [
    { icon: 'las la-home', text: 'Dashboard', link: '/dashboard' },
    { icon: 'lab la-app-store', text: 'Apps' },
    { icon: 'las la-layer-group', text: 'Authentication', submenu: [{ name: 'Login', link: '/login' }, { name: 'Sign Up', link: '/signup' }] },
    { icon: 'las la-shopping-cart', text: 'Pages', link: '/pages' },
    { icon: 'las la-envelope', text: 'Components ', submenu: [{ name: 'Alerts', link: '/alerts' }, { name: 'Buttons', link: '/buttons' }, { name: 'Cards', link: '/cards' }, { name: 'Dropdown', link: '/dropdown' }] },
    { icon: 'las la-envelope', text: 'Forms', link: '/forms' },
    { icon: 'las la-envelope', text: 'Tables', link: '/tables' },

  ]
  dropdownshow(ev: any) {
    // this.dropdownopen = !this.dropdownopen;
    jQuery('.dropdown').removeClass('open');
    jQuery(ev.currentTarget).toggleClass('open');
    jQuery('.side_submenu').slideUp();
    jQuery(ev.currentTarget).find('.side_submenu').slideToggle();
  }

  ngAfterViewInit() {

    jQuery('.dropdown').click((el: any) => {
      jQuery(el).find('.side_submenu').slideDown();

    })
  }
  ngOnInit() { }
}
