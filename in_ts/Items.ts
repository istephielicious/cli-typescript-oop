export class Items {

    constructor(private _itemCode: string, private _description: string,
        private _quantity: number, private _price: number) {}



    //setters.
    set itemCode (code: string) {
        this._itemCode = code;
    }
    set description (desc: string) {
        this._description;
    }
    set quantity (qty: number) {
        this._quantity = qty;
    }
    set price (prc: number) {
        this._price = prc;
    }

    //getters.
    get itemCode () :string {
        return this._itemCode;
    }
    get description() :string {
        return this._description;
    }
    get quantity() :number {
        return this._quantity;
    }
    get price () :number {
        return this._price;
    }


    
    public printItem() :string {
        return this.itemCode + "         " +this.quantity+ "                  " +this.description 
                 + "       " + this.price* this.quantity;
    }
    
}