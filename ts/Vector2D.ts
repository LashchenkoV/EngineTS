class Vector2D {
    public constructor(private _x:number, private _y:number){}

    get x(): number {return this._x;}
    set x(value: number) {this._x = value;}
    get y(): number {return this._y;}
    set y(value: number) {this._y = value;}

    /**
     * Нормализация к единичному
     */
    public normalize():void{
        let res = Vector.normalize(this);
        this._x = res.x;
        this._y = res.y;
    }

    /**
     * Модуль(длинна) вектора
     */
    public lengthV():number {
        return Vector.lengthV(this);
    }

    /**
     * Расстояние
     * @param v
     */
    public distance(v:Vector2D):number{
        return Vector.distance(this,v);
    }

    /**
     * Угол между векторами
     * @param v
     */
    public angle(v:Vector2D):number{
        return Vector.angle(this,v);
    }

    /**
     * Скалярное произвидение векторов
     * @param v
     */
    public multipleScalar(v:Vector2D):number{
        return Vector.multipleScalar(this,v);
    }

    /**
     * Умножение вектора на скаляр
     * @param n
     */
    public multipleOnNumber(n:number):void {
        let res = Vector.multipleOnNumber(this,n);
        this._x = res.x;
        this._y = res.y;
    }

    /**
     * Сумирование векторов
     * @param v
     */
    public summ(v:Vector2D):void {
        let res = Vector.summ(this,v);
        this._x = res.x;
        this._y = res.y;
    }

    /**
     * Вычетание векторов
     * @param v
     */
    public subtraction(v:Vector2D):void {
        let res = Vector.subtraction(this,v);
        this._x = res.x;
        this._y = res.y;
    }
}