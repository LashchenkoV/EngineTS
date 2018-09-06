abstract class Figure{

    protected _centerMass:{x:number,y:number} = {x:0,y:0};
    protected _square:number = 0;

    public constructor(protected _points: Array<Point>, protected _colors: { border: Color, field: Color } = {border:ColorRGBA.getRandom(),field:ColorRGBA.getRandom()}) {
        this.determineCenterMass();
        this.getSquare();
    }

    public abstract rotate(): void;
    public abstract update(): void;

    get colors(): { border: Color; field: Color } {return this._colors;}
    set colors(value: { border: Color, field: Color }) {this._colors = value;}
    public setColorBorder(color:Color){this._colors.border = color;}
    public setColorField(color:Color){this._colors.field = color;}

    get centerMass(): { x: number; y: number } {return this._centerMass;}
    get points(): Array<Point> {return this._points;}
    get square(): number {return this._square;}


    public draw(ctx:CanvasRenderingContext2D): void{
        ctx.beginPath();
        ctx.fillStyle = this._colors.field.str;
        ctx.strokeStyle = this._colors.border.str;
        let index:number=0;
        let line:any = new Path2D();
        for(let i: number = 0; i < this._points.length; i++){
            line.moveTo(this._points[i].x, this._points[i].y);
            index = i+1>this._points.length?0:i;
            line.lineTo(this._points[index].x, this._points[index].y);
        }
        ctx.stroke(line);
        ctx.fill(line);
    }

    /**
     * Считает и возвращает площадь любой фигуры
     */
    public getSquare(): number{
        let square:number = 0;
        let index:number=0;
        for (let i: number = 0; i < this._points.length; i++){
            index = i+1>this._points.length?0:i;
            square += ((this._points[i].x * this._points[index].y)-(this._points[index].x * this._points[i].y));
        }
        this._square = square;
        return square;
    }

    /**
     * Удаляет точку из фигуры
     * @param p
     */
    public delPoint(p: Point): boolean{
        for (let i: number = 0; i < this._points.length; i++){
            if(this._points[i].equals(p)) {
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
        for (let i: number = 0; i < this._points.length; i++) if(!this._points[i].equals(p)) return false;
        this._points.push(p);
        return true;
    }

    /**
     * Определит центр массы любой фигуры
     */
    private determineCenterMass(): {x:number,y:number}{
        let cx:number=0;
        let cy:number=0;
        let z:number=0;
        for(let i:number = 0 ; i < this._points.length; i++){
            cx += this._points[i].x * this._points[i].mass;
            cy += this._points[i].y * this._points[i].mass;
            z += this._points[i].mass;
        }
        this._centerMass = {x:cx/z,y:cy/z};
        return this._centerMass;
    }
}

class CustomFigure extends Figure{
    public constructor (point:Array<Point>,color?:{border:Color,field:Color}){
        super(point,color);
    }
    rotate(): void {
    }

    update(): void {
    }
}

