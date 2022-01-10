import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JSONBuilderService } from '../jsonbuilder.service';
declare var jQuery:any;
@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SettingComponent implements OnInit {
    feature_opened = false;
    setting_feature = [
        { icon: 'las la-align-right', text: 'RTL Version' },
        { icon: 'las la-moon', text: 'Dark Mode' },
        { icon: 'las la-adjust', text: 'Contrast' },
        { icon: 'las la-border-all', text: 'Seamless' },
        { icon: 'las la-universal-access', text: 'Accessibility' },
        { icon: 'las la-undo-alt', text: 'Reset all' },

    ];
    constructor(public json: JSONBuilderService) { }
    feature_open() {
        this.feature_opened = !this.feature_opened;
      
    }
    getColor(Clr:any){
        var r = document.querySelector<HTMLElement>('body')?.style.setProperty('--primary-bg-color' , Clr.target.value);
    }
    feature(item: any) {
        jQuery(item.currentTarget).toggleClass('active');
        console.log(item);
        if (item.text === 'RTL Version') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('rtl');
        }
        else if (item.text === 'Dark Mode') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('dark_mode');
        }
        else if (item.text === 'Contrast') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('contrast');
        }
        else if (item.text === 'Seamless') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('seamless');
        }
        else if (item.text === 'Accessibility') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('ADA');
        }
        else if (item.text === 'Reset all') {
            const body = document.getElementsByTagName('body')[0];
            body.classList.remove('rtl','dark_mode','contrast','seamless','ADA');
        }


    }
    ngOnInit(): void {
    }

}
