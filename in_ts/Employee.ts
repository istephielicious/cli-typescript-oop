import { PrintLogger, printLog } from "./Logger";
import {Person} from './Person';

export class Employee extends Person implements PrintLogger{

    
    public log: string;

    private static _EMP_COUNTER : number = 0;

    constructor(fname: string, lname: string, email: string, private position: string) {
        super(Employee._EMP_COUNTER++,lname,fname,email);
        printLog(this, "Create Employee");
    }

    //getter.
    public getID () : number {
        printLog(this, "Employee::getID()");
        
        return this.id;
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

