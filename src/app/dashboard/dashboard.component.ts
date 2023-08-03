import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class dashboardComponent {
    constructor() {

    }
    invoiceData = [
        { orderId: 'SK2540', BillingName: 'Neal Matthews',Date:'07 Oct,2019',Total:'400',PaymentStatus:'Paid',PaymentMethod:'Mastercard' },
        { orderId: 'SK2541', BillingName: 'Neal Matthews',Date:'08 Oct,2019',Total:'200',PaymentStatus:'Pending',PaymentMethod:'Coral Card' },
        { orderId: 'SK2542', BillingName: 'Neal Matthews',Date:'09 Oct,2019',Total:'1400',PaymentStatus:'Paid',PaymentMethod:'American express' },
        { orderId: 'SK2543', BillingName: 'Neal Matthews',Date:'10 Oct,2019',Total:'800',PaymentStatus:'Processing',PaymentMethod:'Mastercard' },
        { orderId: 'SK2544', BillingName: 'Neal Matthews',Date:'17 Oct,2019',Total:'600',PaymentStatus:'Pending',PaymentMethod:'Mastercard' },
        { orderId: 'SK2545', BillingName: 'Neal Matthews',Date:'27 Oct,2019',Total:'700',PaymentStatus:'Paid',PaymentMethod:'Mastercard' },
        { orderId: 'SK2540', BillingName: 'Neal Matthews',Date:'07 Oct,2019',Total:'400',PaymentStatus:'Paid',PaymentMethod:'Mastercard' },
        { orderId: 'SK2541', BillingName: 'Neal Matthews',Date:'08 Oct,2019',Total:'200',PaymentStatus:'Pending',PaymentMethod:'Coral Card' },
        { orderId: 'SK2542', BillingName: 'Neal Matthews',Date:'09 Oct,2019',Total:'1400',PaymentStatus:'Paid',PaymentMethod:'American express' },
        { orderId: 'SK2543', BillingName: 'Neal Matthews',Date:'10 Oct,2019',Total:'800',PaymentStatus:'Processing',PaymentMethod:'Mastercard' },
        { orderId: 'SK2544', BillingName: 'Neal Matthews',Date:'17 Oct,2019',Total:'600',PaymentStatus:'Pending',PaymentMethod:'Mastercard' },
        { orderId: 'SK2545', BillingName: 'Neal Matthews',Date:'27 Oct,2019',Total:'700',PaymentStatus:'Paid',PaymentMethod:'Mastercard' },
    ]
}