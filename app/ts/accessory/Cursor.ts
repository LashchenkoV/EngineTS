class Cursor {

    public constructor(private _x: number, private _y: number) {}

    get x(): number {return this._x;}
    set x(value: number) {this._x = value;}
    get y(): number {return this._y;}
    set y(value: number) {this._y = value;}

    public setFromEvent(e){
        this._x = e.clientX - e.target.parentElement.offsetLeft;
        this._y = e.clientY - e.target.parentElement.offsetTop;
    }

}