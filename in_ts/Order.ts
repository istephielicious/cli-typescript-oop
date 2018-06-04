import { Items } from './Items'
import { Customer, customerShipping } from './Customer';

export class Order implements customerShipping{
    private ORnumber : number;
    private items: Items[];
    //interface
    _cust_address : string;
    _cust_contact: string;
    _cust_compName: string;

    private static ORDER_COUNT : number = 0;

    constructor(private dateCreated: Date, addr: string, contact: string, compName: string, private totalAmt: number = 0) {
        this.items = [];
        this.ORnumber = Order.ORDER_COUNT++;
        this._cust_address = addr;
        this._cust_contact = contact;
        this._cust_compName = compName;
    }
    public addItem(item:Items) {
        this.items.push(item);
        this.totalAmt += item.price * item.quantity;
    }

    public printAll() {
        console.log('--------------------------------------------------------------------------')        
        console.log("ORDER NUMBER: " + this.ORnumber +
                    "\nORDER DATE: " + this.dateCreated );
        console.log('==========================================================================')
        console.log('CODE         |QUANTITY          |DESCRIPTION              |SUBTOTAL')
        console.log('==========================================================================')
        for(var i:number=0; i<this.items.length; i++){
            console.log(this.items[i].printItem());
        }
        console.log('==========================================================================')
        console.log("TOTAL AMOUNT: "+ this.totalAmt);    
    }
}