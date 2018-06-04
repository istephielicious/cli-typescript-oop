class Test {
    constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
    }
    plus() {
        return this._x + this._y;
    }
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
}
let test = new Test();
test.x = 10;
test.y = 9;
console.log(test.x + ' + ' + test.y + ' = ' + test.plus());
