// ///<reference path='Person.ts'/>
import {Person} from './Person';
export interface customerShipping {
    _cust_address: string;
    _cust_contact: string;
    _cust_compName: string;
}

export class Customer extends Person implements customerShipping{
    public _cust_address : string;
    public _cust_contact: string;
    public _cust_compName: string;

    private static CUST_COUNT : number =0;

    constructor(fname: string, lname: string, email: string, addr: string, contct: string) {
        super(Customer.CUST_COUNT++,lname,fname,email);
        this._cust_address = addr;
        this._cust_contact = contct;
    }
}

