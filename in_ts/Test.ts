class Test {

    constructor(private _x: number=0, private _y: number=0) {}

    plus() {
        return this._x + this._y;
    }

    set x(x: number) {
        this._x = x;
    }

    get x() {
        return this._x;
    }

    set y(y:number) {
        this._y = y;
    }
    get y(): number {
        return this._y;
    }
}

let test = new Test();
test.x = 10;
test.y = 9;

console.log(test.x+ ' + ' + test.y + ' = ' + test.plus());

//============================================================

