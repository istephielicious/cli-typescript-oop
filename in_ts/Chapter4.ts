
// import { Person } from "./Person";
// ///<reference path="../node_modules/@types/q/index.d.ts" />

console.log('//================== GENERIC FUNCTION ========================//');
//  import { Person } from "./Person";
// import Person = require('./Person');

// import * as $ from 'jquery';

// class Employee {
//     constructor(private id :number, private lastname :string, 
//         private firstname: string, private email :string, private created :Date,
//         private updated :Date) {}
    
//     //setters.
//     set Id(id: number) {
//         this.id = id;
//     }
//     set Lastname(lname: string) {
//         this.lastname = lname;
//     }
//     set FirstName(fname: string) {
//         this.firstname = fname;
//     }
//     set Email(em: string) {
//         this.email = em;
//     }

//     //getters.
//     get Id() :number {
//         return this.id;
//     }
//     get Lastname() :string {
//         return this.lastname;
//     }
//     get Firstname() :string {
//         return this.firstname;
//     }
//     get Email() :string {
//         return this.email;
//     }
// }

class Employee implements I_StatusInterface {
    id: number;
    lastname: string;
    firstname: string;
    created: Date;
    updated: Date;
    status: string;
}

class Message {
    id: number;
    created: Date;
    updated: Date;
    subject: string;
    body: string;
    from_employee: Employee;
    to_employee: Employee[];
}

var url : string = 'http://localhost:8080/';

function get<T>(uri: string, saveData: (data :T[]) =>void) :void {
    $.ajax({
        url : uri,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            saveData(data);
        }
    });
}


//main

get<Employee>(url+'employees', function(data: Employee[]){    
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].firstname);
    }
});

get<Message>(url+'messages', function(data: Message[]){
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].subject);
    }
});


//================== GENERIC CLASS ========================//

class NotGeneric{
    constructor(private _url :string){}
    public getAsync() {
        return Q.Promise((resolve: (emp: Employee[]) =>void, reject) =>{
            $.ajax({
                url : this._url,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    resolve(data);
                }
            });
        });
    }

}

var notGen = new NotGeneric(url+'employees');

notGen.getAsync().then(function(data: Employee[]){
    console.log('============== INSIDE PROMISE NOT GENERIC ==============');    
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].firstname);
    }
});

class GenericRep<T>{
    constructor(private _url :string){}
    public getAsync(){
        return Q.Promise((resolve: (data: T[]) => void, reject) =>{
            $.ajax({
                url : this._url,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    resolve(data);
                }
            });
        });
    }
}

var genRep_emp = new GenericRep<Employee>(url+'employees');
var genRep_msg = new GenericRep<Message>(url+'messages');
genRep_emp.getAsync().then(function(data: Employee[]){
    console.log('============== INSIDE PROMISE GENERIC EMPLOYEE ==============');    
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].firstname);
    }
});
genRep_msg.getAsync().then(function(data: Message[]){
    console.log('============== INSIDE PROMISE GENERIC MESSAGE ==============');    
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].subject);
    }
});

//================== MULTI-TYPES GENERIC CLASS ========================//
interface I_StatusInterface {
    status:string;
}
interface I_StudentInterface {
    year: number;
}

class GenRepWithConst<T extends I_StatusInterface>{
    constructor(private _url :string){}
    public getAsync(){
        return Q.Promise((resolve: (data: T[]) => void, reject) =>{
            $.ajax({
                url : this._url,
                method: 'GET',
                dataType: 'json',
                success: (data) => {
                    var activeEmp: T[];
                    for(var i: number=0; i < data.length; i++) {
                        if(data[i].status == 'ACTIVE')
                            activeEmp.push(data[i]);
                    }
                    resolve(activeEmp);
                }
            });
        });
    }
}

var genRep_emp1 = new GenRepWithConst<Employee>('../repo_json/employees.json');
genRep_emp1.getAsync().then(function(data: Employee[]){
    console.log('============== INSIDE PROMISE GENERIC EMPLOYEE WITH CONSTRAINTS==============');    
    for(var i :number =0; i < data.length; i++) {
        console.log(data[i].firstname);
    }
});