import { Component } from "@angular/core";

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})

export class dropdownComponent {
    selectedValue: string = '';
    selectedValue1: string = '';
    selectedValue2: string = '';
    searchOption = '';
    dropShow: any;
    dropShow1: any;
    dropShow2: any;
    dropdown = ['Dropdown 1', 'Dropdown 2', 'Dropdown 3', 'Dropdown 4', 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.', 'Dropdown 6'];
    dropdown1 = [
        { icon: 'lab la-html5', text: 'Html'},
        { icon: 'lab la-css3-alt', text: 'Css'},
        { icon: 'lab la-node-js', text: 'Node Js'},
        { icon: 'lab la-java', text: 'Java'},
        { icon: 'lab la-node', text: 'Node'},
        { icon: 'lab la-vuejs', text: 'Vue Js'},
        { icon: 'lab la-bootstrap', text: 'Bootstrap'},
    ]
    dropdown2 = [
        { path: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999', text: 'Html'},
        { path: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999', text: 'Html'},
        { path: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999', text: 'Html'},
    
    ]
    constructor() {
    }
    dropdownShow() {
        this.dropShow = !this.dropShow;
    }
    dropdownShow1() {
        this.dropShow1 = !this.dropShow1;
    }
    dropdownShow2() {
        this.dropShow2 = !this.dropShow2;
    }
    show(e: any) {
        this.selectedValue = e;
        console.log(e)
    }
    show1(e1: any) {
        this.selectedValue1 = e1;
        console.log(e1)
    }
    show2(e2: any) {
        this.selectedValue2 = e2;
        console.log(e2)
    }
    

    changecheckbox(checkbox: any) {
        console.log(checkbox.target.checked)
        document.getElementById('searchfield')?.toggleAttribute("readonly");
    }
}