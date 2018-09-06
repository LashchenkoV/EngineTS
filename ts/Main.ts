class Main {
    private _ctx:CanvasRenderingContext2D;

    public constructor(private _canvas:any){
        this._ctx = this._canvas.getContext("2d");
        let f:Figure = new CustomFigure([
            new Point(100,100),
            new Point(200,100),
            new Point(200,50),
            new Point(100,50),
        ],{border:new ColorRGBA(255,0,0),field:new ColorRGBA(0,255,0)});
        f.draw(this._ctx);
    }

    get ctx(): CanvasRenderingContext2D {return this._ctx;}
    get canvas(): any {return this._canvas;}
}


window.addEventListener("load",()=>{
    new Main(document.getElementById("canvas"));
});
