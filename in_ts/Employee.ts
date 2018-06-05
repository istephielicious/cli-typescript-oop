import { PrintLogger, printLog } from "./Logger";
import {Person} from './Person';

export class Employee extends Person implements PrintLogger{

    
    public log: string;

    private static _EMP_COUNTER : number = 0;

    constructor(fname: string, lname: string, email: string, private position: string) {
        super(Employee._EMP_COUNTER++,lname,fname,email);
        printLog(this, "Create Employee");
    }

    //setters.
    set id (id: number) {
        this._id = id;
    }
    set fName (str: string) {
        this._fName = str;
    }
    set lName (str: string) {
        this._lName = str;
    }
    set email (str: string) {
        this._email = str;
    }

    //getters.
    get id () :number {
        return this._id;
    }
    get fName () :string {
        return this._fName;
    }
    get lName () :string {
        return this._lName;
    }
    get email () :string {
        return this._email;
    }

    public empCount () :number {

        return Employee._EMP_COUNTER;
    }

    public printInfo() :string {
        printLog(this, "Employee::printInfo()");
        return "EMPLOYEE DETAILS\n" +
                "ID: "+this.id +
                "Name: "+this.getFullName() +"\n" +
                "Email: "+this.email + "\n" +
                "Position: " +this.position;
    }
}

