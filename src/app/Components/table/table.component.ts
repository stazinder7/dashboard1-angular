import { Component } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class tableComponent {
    transaction_table = [
        { ID: '#SK2540', Biller_Name: 'Neal Matthews', Date: '	07 Oct, 2019', total: '	$400', paymentStatus: 'paid', Payment_Method: 'Mastercard', Action: 'View Details' },
        { ID: '#SK2541', Biller_Name: 'Jamal Burnett', Date: '	07 Oct, 2019', total: '	$380', paymentStatus: 'Chargeback', Payment_Method: 'Visa', Action: 'View Details' },
        { ID: '#SK2540', Biller_Name: 'Neal Matthews', Date: '	07 Oct, 2019', total: '	$400', paymentStatus: 'paid', Payment_Method: 'Mastercard', Action: 'View Details' },
        { ID: '#SK2541', Biller_Name: 'Jamal Burnett', Date: '	07 Oct, 2019', total: '	$380', paymentStatus: 'Chargeback', Payment_Method: 'Visa', Action: 'View Details' },
        { ID: '#SK2540', Biller_Name: 'Neal Matthews', Date: '	07 Oct, 2019', total: '	$400', paymentStatus: 'paid', Payment_Method: 'Mastercard', Action: 'View Details' },
        { ID: '#SK2541', Biller_Name: 'Jamal Burnett', Date: '	07 Oct, 2019', total: '	$380', paymentStatus: 'Chargeback', Payment_Method: 'Visa', Action: 'View Details' },


    ]
    constructor() {

    }
}