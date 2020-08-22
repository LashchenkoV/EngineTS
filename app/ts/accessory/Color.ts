abstract class Color {
    private _str:string = '';
    protected constructor(private _r:number=0, private _g:number=0, private _b:number=0){}

    get r(): number {return this._r;}
    set r(value: number) {this._r = value>255||value<0?this._r:value;}
    get g(): number {return this._g;}
    set g(value: number) {this._g = value>255||value<0?this._g:value;}
    get b(): number {return this._b;}
    set b(value: number) {this._b = value>255||value<0?this._b:value;}
    get str(): string {return this._str;}
    set str(value: string) {this._str = value;}
}

class ColorRGBA extends Color{
    public constructor(r:number=0, g:number=0, b:number=0, private _alpha:number=1){
        super(r,g,b);
        this.alpha = _alpha;
        this.createStr();
    }

    get alpha(): number {return this._alpha;}
    set alpha(alpha: number) {this._alpha = alpha<0||alpha>1?this._alpha:alpha;}

    private getRand(alpha:number):Color{
        this.r = Canvas.getRandomInt(0,255);
        this.g = Canvas.getRandomInt(0,255);
        this.b = Canvas.getRandomInt(0,255);
        this.alpha = alpha;
        this.createStr();
        return this;
    }

    /**
     * Формирует строку цвета
     */
    private createStr():void{
        this.str = `rgba(${this.r},${this.g},${this.b},${this.alpha})`;
    }

    /**
     * Возвратит весь обьект ColorRGBA
     * @param alpha
     */
    public static getRandom(alpha:number = 1):Color{
        let color:ColorRGBA = new ColorRGBA();
        color.getRand(alpha);
        return color;
    }

    /**
     * Возвратит только строку
     * @param alpha
     */
    public static getRandomString(alpha:number):string{
        let color:ColorRGBA = new ColorRGBA();
        color.getRand(alpha);
        return color.str;
    }

}
