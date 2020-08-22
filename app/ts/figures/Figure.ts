abstract class Figure {

    protected _centerMass: Point = new Point(0, 0);
    protected _square: number = 0;
    protected _velocity: Vector2D = new Vector2D(0, 0);
    protected _position: Vector2D = new Vector2D(0, 0);
    private _basis: { x: Vector2D, y: Vector2D } = {
        x: new Vector2D(1, 0),
        y: new Vector2D(0, 1)
    };

    public constructor(protected _points: Array<Point>, protected _colors: { border: Color, field: Color } = {
        border: ColorRGBA.getRandom(),
        field: ColorRGBA.getRandom()
    }) {
        this.determineCenterMass();
        this.getSquare();
    }

    public abstract update(): void;

    get colors(): { border: Color; field: Color } {
        return this._colors;
    }

    set colors(value: { border: Color, field: Color }) {
        this._colors = value;
    }

    public setColorBorder(color: Color) {
        this._colors.border = color;
    }

    public setColorField(color: Color) {
        this._colors.field = color;
    }

    get centerMass(): Point {
        return this._centerMass;
    }

    get points(): Array<Point> {
        return this._points;
    }

    get square(): number {
        return this._square;
    }

    get basis(): { x: Vector2D; y: Vector2D } {
        return this._basis;
    }

    public rotate(rad: number): void {
        this._basis.x.rotate(rad);
        this._basis.y.rotate(rad);
        for (let i = 0; i < this._points.length; i++) {
            this._points[i].x = this._basis.x.multipleScalar(this._points[i]);
            this._points[i].y = this._basis.y.multipleScalar(this._points[i]);
        }
        this.determineCenterMass();

    }

    /**
     * Вхождение точки в фигуру
     * @param p
     */
    public isEntryPoint(p: Cursor): boolean {
        let c: boolean = false;
        let j: number = this._points.length - 1;
        for (let i = 0; i < this._points.length; i++) {
            if (((this._points[i].y <= p.y && p.y < this._points[j].y) || (this._points[j].y <= p.y && p.y < this._points[i].y)) && p.x > (this._points[j].x - this._points[i].x) * (p.y - this._points[i].y) / (this._points[j].y - this._points[i].y) + this._points[i].x) c = !c;
            j = i;
        }
        return c;
    }

    /**
     * Отрисовка
     * @param ctx
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        let index: number = 0;
        let figure = new Path2D();
        ctx.fillStyle = this._colors.field.str;
        ctx.strokeStyle = this._colors.border.str;
        figure.moveTo(this._points[0].x, this._points[0].y);
        for (let i: number = 0; i < this._points.length; i++) {
            index = i + 1 >= this._points.length ? 0 : i + 1;
            figure.lineTo(this._points[index].x, this._points[index].y);
        }
        ctx.fill(figure);
        ctx.stroke(figure);
    }

    /**
     * Считает и возвращает площадь любой фигуры
     */
    public getSquare(): number {
        let square: number = 0;
        let index: number = 0;
        for (let i: number = 0; i < this._points.length; i++) {
            index = i + 1 > this._points.length ? 0 : i;
            square += ((this._points[i].x * this._points[index].y) - (this._points[index].x * this._points[i].y));
        }
        this._square = square;
        return square;
    }

    /**
     * Удаляет точку из фигуры
     * @param p
     */
    public delPoint(p: Point): boolean {
        for (let i: number = 0; i < this._points.length; i++) {
            if (this._points[i].equals(p)) {
                this._points.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * Добавляет точку в фигуру
     * @param p
     */
    public addPoint(p: Point): boolean {
        for (let i: number = 0; i < this._points.length; i++)
            if (this._points[i].equals(p)) return false;
        this._points.push(p);
        this.determineCenterMass();
        return true;
    }

    /**
     * Определит центр массы любой фигуры
     */
    protected determineCenterMass(): { x: number, y: number } {
        let cx: number = 0;
        let cy: number = 0;
        let z: number = 0;
        for (let i: number = 0; i < this._points.length; i++) {
            cx += this._points[i].x * this._points[i].mass;
            cy += this._points[i].y * this._points[i].mass;
            z += this._points[i].mass;
        }
        this._centerMass.x = cx / z;
        this._centerMass.y = cy / z;
        return this._centerMass;
    }
}

