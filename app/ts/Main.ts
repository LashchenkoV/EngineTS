class Main {

    private _ctx: CanvasRenderingContext2D;
    private _cursor: Cursor = new Cursor(0, 0);
    private _figures: Array<Figure> = [
        // new Rectangle(new Point(50,50), new Vector2D(10,10))
    ];

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    get canvas(): any {
        return this._canvas;
    }

    get cursor(): Cursor {
        return this._cursor;
    }

    get figures(): Array<Figure> {
        return this._figures;
    }

    public constructor(private _canvas: any) {
        this._ctx = this._canvas.getContext("2d");
        this.update();
        this.bindEvent();
    }

    private bindEvent(): void {
        this._canvas.addEventListener("click", (e) => {
            e.preventDefault();
            this._cursor.setFromEvent(e);
            for (let i: number = 0; i < this._figures.length; i++) {
                if (!this._figures[i].isEntryPoint(this._cursor)) continue;
                this._figures[i].rotate(Angle.deg(1));
            }
        });
    }

    private update(): void {
        this.ctx.clearRect(0, 0, 1100, 600);
        for (let i: number = 0; i < this._figures.length; i++) {
            this._figures[i].draw(this._ctx);
            this._figures[i].centerMass.draw(this._ctx);
        }
        requestAnimationFrame(() => this.update());
    }
}


window.addEventListener("load", () => {
    new Main(document.getElementById("canvas"));
});
