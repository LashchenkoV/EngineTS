class Main {

    private _ctx:CanvasRenderingContext2D;
    private _cursor:Cursor = new Cursor(0,0);

    get ctx(): CanvasRenderingContext2D {return this._ctx;}
    get canvas(): any {return this._canvas;}
    get cursor(): Cursor {return this._cursor;}

    public constructor(private _canvas:any){
        this._ctx = this._canvas.getContext("2d");
        this.update();
        this.bindEvent();
    }

    private bindEvent():void{
        this._canvas.addEventListener("click",(e)=>{
            e.preventDefault();
            this._cursor.setFromEvent(e);
        });
    }

    private update():void{

        requestAnimationFrame(()=>this.update());
    }
}


window.addEventListener("load",()=>{
    new Main(document.getElementById("canvas"));
});
