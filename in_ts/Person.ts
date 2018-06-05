

export class Person {

    public static PERSON_COUNT : number = 0;

    constructor(protected _id: number = Person.PERSON_COUNT++, protected _lName: string = "", 
        protected _fName: string = "", protected _email: string = "") {
    }

    public getFullName () :string {
        return this._fName + " " + this._lName;
    };
    public printInfo() :string {
        return "PERSONAL DETAILS \n" +
                "ID: "+ this._id +
                "Name: "+this.getFullName() +"\n" +
                "Email: "+this._email;
    }

 }