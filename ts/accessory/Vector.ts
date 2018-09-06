/**
 * Класс содержит статические ф-ции которые выполняют основные операции над 2D векторами
 * И является вспомагательным
 */
abstract class Vector {

    /**
     * Вращение вектора
     * @param v
     * @param rad
     */
    public static rotate(v:Vector2D, rad:number){
        let x = v.x * Math.cos(rad) - v.y * Math.sin(rad);
        let y = v.x * Math.sin(rad) + v.y * Math.cos(rad);
        return new Vector2D(x,y);
    }

    /**
     * Расстояние
     */
    public static distance(v1:Vector2D, v2:Vector2D):number{
        return Vector.lengthV(Vector.subtraction(v1,v2));
    }

    /**
     * Угол между векторами
     */
    public static angle(v1:Vector2D, v2:Vector2D):number{
        return Math.acos(Vector.multipleScalar(Vector.normalize(v1),Vector.normalize(v2)));
    }

    /**
     * Нормализация к единичному
     */
    public static normalize(v1:Vector2D):Vector2D{
        let len:number = Vector.lengthV(v1);
        return new Vector2D(v1.x / len,v1.y / len);
    }

    /**
     * Модуль(длинна) вектора
     */
    public static lengthV(v1:Vector2D):number {
        return Math.sqrt(Math.pow(v1.x, 2) + Math.pow(v1.y, 2));
    }

    /**
     * Скалярное произвидение векторов
     * @param v1
     * @param v2
     */
    public static multipleScalar(v1:Vector2D, v2:Vector2D):number{
        return v1.x * v2.x + v1.y * v2.y;
    }

    /**
     * Умножение вектора на скаляр
     * @param n
     * @param v1
     */
    public static multipleOnNumber(v1:Vector2D, n:number):Vector2D {
        return new Vector2D(v1.x + n,v1.y + n);
    }

    /**
     * Сумирование векторов
     * @param v1
     * @param v2
     */
    public static summ(v1:Vector2D, v2:Vector2D):Vector2D {
        return new Vector2D(v1.x + v2.x,v1.y + v2.y);
    }

    /**
     * Вычитание
     * @param v1
     * @param v2
     */
    public static subtraction(v1:Vector2D, v2:Vector2D):Vector2D {
        return new Vector2D(v1.x - v2.x,v1.y - v2.y);
    }
}