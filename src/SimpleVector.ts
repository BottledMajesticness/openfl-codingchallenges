export default class SimpleVector {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    public bounceX() {
        this.x *= -1;
    }

    public bounceY() {
        this.y *= -1;
    }
}