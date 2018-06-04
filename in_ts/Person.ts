export class Person {

    constructor(protected id: number, protected lName: string, 
        protected fName: string, protected email: string) {
    }

    public getFullName () :string {
        return this.fName + " " + this.lName;
    };
    public printInfo() :string {
        return "PERSONAL DETAILS \n" +
                "ID: "+ this.id +
                "Name: "+this.getFullName() +"\n" +
                "Email: "+this.email;
    }
    

    // //setters.
    // set id (id: number) {
    //     this._id = id;
    // }
    // set fName (str: string) {
    //     this._fName = str;
    // }
    // set lName (str: string) {
    //     this._lName = str;
    // }
    // set email (str: string) {
    //     this._email = str;
    // }

    // //getters.
    // get id () :number {
    //     return this._id;
    // }
    // get fName () :string {
    //     return this._fName;
    // }
    // get lName () :string {
    //     return this._lName;
    // }
    // get email () :string {
    //     return this._email;
    // }

 }