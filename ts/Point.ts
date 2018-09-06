class Point{

    constructor(private _x:number, private _y:number, private _mass:number=1) {}

    /**
     * Обновляет координату точки относительно матрицы базисных векторов
     * @param v:Array<Vector2D>[2]
     */
    public updateForBasis(v:Array<Vector2D>[2]) {
        this._x = this._x * v[0].x + this._x * v[0].y;
        this._x = this._y * v[1].x + this._y * v[1].y;
    }

    /**
     * Установит новые значения для координат
     * @param x
     * @param y
     */
    public setLocation(x:number,y:number):void{
        this.x = x;
        this.y = y;
    }

    /**
     * Расстояние между точками
     * @param p
     */
    public getDistance(p:Point):number{
        return Math.sqrt(Math.pow(p.x - this.x,2)+Math.pow(p.y - this.y,2));
    }

    /**
     * Совпадают ли точки
     * @param p
     */
    public equals(p:Point):boolean{
        return p.x === this.x && p.y === this.y;
    }

    get x(): number {return this._x;}
    set x(value: number) {this._x = value;}
    get y(): number {return this._y;}
    set y(value: number) {this._y = value;}
    get mass(): number {return this._mass;}
    set mass(value: number) {this._mass = value;}
}