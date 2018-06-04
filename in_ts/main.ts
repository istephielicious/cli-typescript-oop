import { Employee } from './Employee';
import { Customer } from './Customer';
import { Order } from './Order'; 
import * as readsync from "readline-sync"
import { Items } from './Items';


var exit: boolean = false;
//Components:
var employees : Employee[] = [];
var orders: Order[] = [];
var customers: Customer[] = [];

do{

    console.log("*******************************");
    console.log("         OPTION MENU");    
    console.log("*******************************");

    console.log("1. Add new Employee");
    // console.log("2. Add new Customer");
    console.log("3. Create Order form");
    console.log("4. View All Orders");
    console.log("5. Exit");
    console.log("*******************************");  
    var opt = readsync.question('Please choose menu:');

    switch(opt) {
        case '1':
            addEmp();
            break;
        case '2':
            break;
        case '3':
            createOrder();
            break;
        case '4':
            if(orders.length == 0) 
                console.log("NO EXISTING ORDERS");
            for(var i:number=0; i< orders.length; i++) {
                orders[i].printAll();
                
            }
            break;
        case '5':
            exit = true;
            break;
        default:
            continue;
    }

    console.log('\n\n');
} while(!exit);



function addEmp(): void {
    var fname : string, lname: string, email: string, pos: string, yes: boolean = true;
    do{
        console.log("===============================");
        console.log("      ADD NEW EMPLOYEE");
        console.log("===============================");
    
        fname = readsync.question ('First name: ', );
        lname = readsync.question ('Last name: ');
        email = readsync.question ('Email: ');
        pos = readsync.question('Employee position: ');
    
        var emp1 = new Employee(fname, lname, email, pos);
        console.log("===============================");
        console.log(emp1.printInfo());
        console.log('Employee record saved!');
    
        do{
            var nput = readsync.question ('Add another employee? (yes/no) '
            // , {hideEchoBack: true // The typed text on screen is hidden by `*` (default). }
        );
            if(nput.toLowerCase() == 'no') {
                yes = false;
                break;
            } else if(nput.toLowerCase() == 'yes'){
                yes = true;
                break;
            } else {
                console.log("Please input yes or no");
            }
        } while (true);
        
    
    } while (yes);
}

function createOrder() {
    var items :any[] = [{code: 1001, description: 'CPUs / Processors    ', price: 5000}, 
                        {code: 1002, description: 'Motherboards         ', price: 8000},
                        {code: 1003, description: 'Cooling              ', price: 2500},
                        {code: 1004, description: 'Video Graphic Devices', price: 4800},
                        {code: 1005, description: 'Power Supplies       ', price: 2800},
                        {code: 1006, description: 'Memory               ', price: 7000}                  
                    ]
    var itemCode: string, qty: number;
    var today: Date = new Date();
    var addr = readsync.question("Input Customer shipping address: ");
    var contact = readsync.question("Input Customer contact number: ");
    var compName = readsync.question("Input Customer company name: ");
    
    var ordr = new Order(today, addr, contact, compName);

    do {
        console.log("===============================");
        console.log("       PRODUCT LIST");
        console.log("===============================");
        console.log("itemCode       | Description ");
        var i: number = 0
        for(; i<items.length; i++) {
            console.log(items[i].code+ "       |"+items[i].description);
        }
        console.log("===============================");
        itemCode = readsync.question('Input product code: ');
        var found = false;
        for(i=0; i< items.length; i++) {
            if(itemCode == items[i].code) {
                found = true;
                break;
            }
        }
        qty = parseInt(readsync.question('Input quantity: '));
        
        if(found){
            ordr.addItem(new Items(itemCode, items[i].description, qty, items[i].price))
        }
        else {
            console.log("Item code entered is not in the list of items.");
        }

        ordr.printAll();

        var isAddItem = readsync.question("Do you want to add new item? (yes/no)");
        if(isAddItem.toLowerCase() == 'no') {
            break;
        } else if(isAddItem.toLowerCase() == 'yes'){
           continue;
        } else {
            break;
        }



    } while(true);
    orders.push(ordr);
}