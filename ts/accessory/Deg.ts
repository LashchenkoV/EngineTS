abstract class Angle{
    /**
     * Принимает градусы, возвращает радианы
     * @param deg
     */
    public static deg(deg: number): number {
        return deg * Math.PI / 180;
    }

    /**
     * Принимает радианы, возвращает градусы
     * @param rad
     */
    public static rad(rad: number): number {
        return rad * 180 / Math.PI;
    }
}
