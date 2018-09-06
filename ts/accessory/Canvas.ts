class Canvas {
    public static getRandomInt(min:number, max:number):number{
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }
    public static getRandomFloat(min:number, max:number):number{
        return this.getRoundNum(min + Math.random() * (max - min),3);
    }
    public static getRoundNum(number:any, n:number){ return +parseFloat(number).toFixed(n) }
}